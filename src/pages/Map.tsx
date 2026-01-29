import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, Square, Box, X, Star, TriangleAlert, Droplets, Activity } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import LOCATIONS from '../json/loc.json';
import ShowType from '../components/map/locationType';
import ShowStars from '../components/map/showStars';

interface MapProps {
  setActiveTab: (tab: string) => void;
}

export default function Map({setActiveTab}: MapProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ x: 0, z: 0 });
    const [viewMode, setViewMode] = useState<'2D' | '3D'>('3D');

    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const requestRef = useRef<number | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);

    const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
    const [mode, setMode] = useState<any | null>('Normal');
    const faultLineRef = useRef<THREE.Line | null>(null);
    const modeRef = useRef(mode);
    const [sidebarOn, sideBarToggle] = useState<boolean>(false);

    const [magnitude, setMagnitude] = useState(7.2);
    const [depth, setDepth] = useState(10);
    const [isShaking, setIsShaking] = useState(false);

    const magRef = useRef(magnitude);
    const shakingRef = useRef(isShaking);
    const depthRef = useRef(depth);

    const faultPathPoints = [
        new THREE.Vector3(-10, 0.05, -50), 
        new THREE.Vector3(-5, 0.05, -35), 
        new THREE.Vector3(2, 0.05, 0),
        new THREE.Vector3(8, 0.05, 25),
        new THREE.Vector3(15, 0.05, 50)
    ];

    useEffect(() => {
        if (!mountRef.current) return;

        mountRef.current.innerHTML = '';

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);
        scene.fog = new THREE.FogExp2(0x050505, 0.02);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(12, 12, 12);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const gridHelper = new THREE.GridHelper(150, 150, 0x00ffcc, 0x222222);
        scene.add(gridHelper);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2.1;
        controlsRef.current = controls;

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        const intersectPoint = new THREE.Vector3();
        const clickableObjects: THREE.Object3D[] = [];

        function createLabelSprite(name: string, color: string) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;
            
            canvas.width = 512;
            canvas.height = 128;

            ctx.filter = 'blur(4px)';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.beginPath();
            ctx.roundRect(32, 24, 448, 80, 40); 
            ctx.fill();

            ctx.filter = 'none';
            ctx.strokeStyle = color;
            ctx.lineWidth = 6;
            ctx.stroke();

            ctx.font = 'bold 36px monospace';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(name.toUpperCase(), 256, 64);

            const texture = new THREE.CanvasTexture(canvas);
            texture.anisotropy = 16; 

            const spriteMaterial = new THREE.SpriteMaterial({ 
                map: texture, 
                transparent: true, 
                depthTest: true
            });

            const sprite = new THREE.Sprite(spriteMaterial);

            sprite.scale.set(1.2, 0.3, 1); 

            return sprite;
        }

        const faultCurve = new THREE.CatmullRomCurve3(faultPathPoints);

        const tubeGeometry = new THREE.TubeGeometry(faultCurve, 64, 0.08, 8, false);

        const tubeMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xff0000, 
            transparent: true, 
            opacity: 0.6,
            wireframe: false
        });

        const faultTube = new THREE.Mesh(tubeGeometry, tubeMaterial);
        faultTube.name = "faultVisual";
        scene.add(faultTube);

        LOCATIONS.forEach((loc) => {
            const group = new THREE.Group();
            let geometry, meshY = 0, labelY = 0;

            switch (loc.shapeType) {
                case "box":
                    geometry = new THREE.BoxGeometry(loc.size[0], loc.size[1], loc.size[2]);
                    meshY = loc.size[1] / 2;
                    labelY = loc.size[1];
                    break;
                case "sphere":
                    geometry = new THREE.SphereGeometry(loc.size[0], loc.size[1], loc.size[2]);
                    meshY = loc.size[0];
                    labelY = loc.size[0] * 2;
                    break;
                case "cylinder":
                    geometry = new THREE.CylinderGeometry(loc.size[0], loc.size[1], loc.size[2], loc.size[3] || 32);
                    meshY = loc.size[2] / 2;
                    labelY = loc.size[2];
                    break;
                case "cone":
                    geometry = new THREE.ConeGeometry(loc.size[0], loc.size[1], loc.size[2] || 32);
                    meshY = loc.size[1] / 2;
                    labelY = loc.size[1];
                    break;
                default:
                    geometry = new THREE.BoxGeometry(1, 1, 1);
            }

            const material = new THREE.MeshBasicMaterial({
                color: loc.color,
                wireframe: loc.wireframes,
                transparent: loc.transperancy,
                opacity: loc.opacity
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.userData = loc;
            mesh.position.set(0, meshY, 0);
            group.add(mesh);
            clickableObjects.push(mesh);

            const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(loc.pos.x, 0, loc.pos.z * -1)];
            const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
            const lineMat = new THREE.LineBasicMaterial({ color: loc.color, transparent: true, opacity: 0.2 });
            scene.add(new THREE.Line(lineGeom, lineMat));

            if (loc.label && loc.labelContent) {
                const label = createLabelSprite(loc.labelContent, loc.color);
                label.position.set(0, labelY + 0.6, 0);
                group.add(label);
            }

            if (loc.borders) {
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({ color: loc.borders, transparent: true, opacity: loc.borderOpacity });
                const borderLines = new THREE.LineSegments(edges, lineMaterial);
                borderLines.position.copy(mesh.position);
                borderLines.scale.set(1.001, 1.001, 1.001);
                group.add(borderLines);
            }

            group.position.set(loc.pos.x, 0, loc.pos.z * -1);
            group.userData.originalPos = group.position.clone();
            scene.add(group);
        });

        const onMouseMove = (event: MouseEvent) => {
            if (!mountRef.current) return;
            const rect = mountRef.current.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(clickableObjects);
            mountRef.current.style.cursor = intersects.length > 0 ? 'pointer' : 'default';

            if (raycaster.ray.intersectPlane(plane, intersectPoint)) {
                setCoords({ x: parseFloat(intersectPoint.x.toFixed(2)), z: parseFloat(intersectPoint.z.toFixed(2)) });
            }
        };

        const handleMouseClick = () => {
            
            if (modeRef.current !== "Normal") {
                return; 
            }

            const intersects = raycaster.intersectObjects(clickableObjects);
            if (intersects.length > 0) {
                setSelectedLocation(intersects[0].object.userData);
            } 
        };

        mountRef.current.addEventListener('click', handleMouseClick);
        mountRef.current.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            setTimeout(function() {
                const fault = scene.getObjectByName("faultVisual");
                if (fault instanceof THREE.Mesh) {
                    const isEarthquake = modeRef.current === 'Earthquake';
                    fault.visible = isEarthquake;
                    
                    if (isEarthquake) {
                        const material = fault.material as THREE.MeshBasicMaterial;
                        material.opacity = 0.4 + Math.sin(Date.now() * 0.002) * 0.2;
                    }
                }

                if (shakingRef.current && modeRef.current === 'Earthquake') {
                    
                    const intensity = Math.max(0, (magRef.current - 4) * 0.015);
                    
                    scene.children.forEach((child) => {
                        if (child instanceof THREE.Group) {
                            child.position.x += (Math.random() - 0.5) * intensity;
                            child.position.z += (Math.random() - 0.5) * intensity;
                            
                            if (magRef.current > 7) {
                                child.rotation.z = (Math.random() - 0.5) * (intensity * 0.2);
                            }
                        }
                    });
                }

                controls.update();
                renderer.render(scene, camera);
                requestRef.current = requestAnimationFrame(animate);
            }, 1000/144);
        };
        requestRef.current = requestAnimationFrame(animate);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeEventListener('mousemove', onMouseMove);
                mountRef.current.removeEventListener('click', handleMouseClick);
            }
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            renderer.dispose();
            scene.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    (obj.material as THREE.Material).dispose();
                }
            });
        };
    }, []);

    useEffect(() => {
        
        if (faultLineRef.current) {
            faultLineRef.current.visible = (mode === 'Earthquake');
        }

        magRef.current = magnitude;
        shakingRef.current = isShaking;
        depthRef.current = depth;
        modeRef.current = mode;

    }, [mode, magnitude, isShaking, depth]);

    const resetBuildingPositions = () => {
        setIsShaking(false);
        shakingRef.current = false;

        if (sceneRef.current) {
            sceneRef.current.children.forEach((child) => {
                if (child instanceof THREE.Group && child.userData.originalPos) {
                    child.position.copy(child.userData.originalPos);
                    child.rotation.set(0, 0, 0);
                }
            });
        }
    };

    const switchTo2D = () => {
        if (!controlsRef.current || !cameraRef.current) return;
        setViewMode('2D');
        cameraRef.current.position.set(0, 15, 0);
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.enableRotate = false;
    };

    const switchTo3D = () => {
        if (!controlsRef.current || !cameraRef.current) return;
        setViewMode('3D');
        cameraRef.current.position.set(12, 12, 12);
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.enableRotate = true;
    };

    const getDistanceToFault = (locPos: { x: number, z: number }) => {
        const point = { x: locPos.x, z: locPos.z * -1 };
        let minDistance = Infinity;

        for (let i = 0; i < faultPathPoints.length - 1; i++) {
            const v = faultPathPoints[i];
            const w = faultPathPoints[i + 1];

            const l2 = Math.pow(w.x - v.x, 2) + Math.pow(w.z - v.z, 2);
            if (l2 === 0) return Math.sqrt(Math.pow(point.x - v.x, 2) + Math.pow(point.z - v.z, 2));

            let t = ((point.x - v.x) * (w.x - v.x) + (point.z - v.z) * (w.z - v.z)) / l2;
            t = Math.max(0, Math.min(1, t));

            const distance = Math.sqrt(
                Math.pow(point.x - (v.x + t * (w.x - v.x)), 2) +
                Math.pow(point.z - (v.z + t * (w.z - v.z)), 2)
            );

            if (distance < minDistance) minDistance = distance;
        }
        return minDistance.toFixed(2);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white">
            <button onClick={() => {mode == "Normal" ? setActiveTab('Credits') : setMode('Normal'); sideBarToggle(false)}} className={`flex items-center absolute top-6 left-6 z-10 px-4 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/20 font-mono text-[15px] hover:bg-white/5 hover:text-[#00ffcc] transition-all rounded uppercase`}>
                <ChevronLeft size={25}/> <p className="mr-2">Back</p>
            </button>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 p-1 bg-white/[0.03] backdrop-blur-sm border border-white/20 rounded-md">
                <span className={`pointer-events-none absolute bg-white/10 w-[calc(50%_-_4px)] h-[calc(100%_-_8px)] rounded-sm transition-all duration-300 ease-in-out z-0 ${viewMode === '3D' ? 'translate-x-full' : 'translate-x-0'}`}></span>
                <button onClick={switchTo2D} className={`gap-1 flex justify-center items-center w-[140px] h-7 relative z-10 text-[12px] uppercase transition-all rounded hover:text-white ${viewMode === '2D' ? 'text-[#00ffcc] font-bold' : 'text-white/60'}`}>
                    <Square size={14} /> Top View (2D)
                </button>
                <button onClick={switchTo3D} className={`gap-1 flex justify-center items-center w-[140px] h-7 relative z-10 text-[12px] uppercase transition-all rounded hover:text-white ${viewMode === '3D' ? 'text-[#00ffcc] font-bold' : 'text-white/60'}`}>
                    <Box size={14} /> Orbital (3D)
                </button>
            </div>

            <div className="backdrop-blur-sm absolute bottom-6 left-6 z-10 font-mono text-xs bg-white/[0.03] p-4 border border-white/20 rounded">
                <p>X: {coords.x}</p>
                <p>Y: {coords.z * -1}</p>
                <p className="mt-2 text-[10px] opacity-50 uppercase tracking-widest">Coordinates</p>
            </div>

            <div className={`flex flex-col p-2 border border-white/20 rounded absolute top-6 right-6 w-[clamp(0px,_30vw,_350px)] h-[calc(100vh_-_40px)] bg-black/5 backdrop-blur-sm shadow-2xl transition-all ${selectedLocation ||  sidebarOn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                <button onClick={() => {setSelectedLocation(null); sideBarToggle(false)}} className="bg-white/5 flex justify-center items-center rounded w-8 h-8 border border-white/20 hover:text-red-500 transition-all">
                    <X size={30}/>
                </button>
                <div className="overflow-x-hidden overflow-y-auto flex flex-col mt-2">
                    {selectedLocation && mode == 'Normal' && (
                        <>
                            <img src={selectedLocation.image} alt="Location" className="w-full rounded border-2 border-white/30 object-cover aspect-video" />
                            <p className='ml-1 font-geist text-[20px] mt-2 font-bold'>{selectedLocation.name}</p>
                            <div className='flex justify-between mt-3'>
                                <div className='flex items-center text-[#9C9C9C] gap-1 ml-[2px]'>
                                    <ShowType type={selectedLocation.type}/>
                                </div>
                                <div className={`flex items-center gap-1 mr-2 ${selectedLocation.rating !== 'N/A' ? 'text-[#FFB600]' : 'text-white/30'}`}>
                                    {selectedLocation.rating}
                                    <div className="flex">
                                        {selectedLocation.rating !== 'N/A' ? (
                                            <ShowStars rating={Number(selectedLocation.rating)} />
                                        ) : (
                                            [...Array(5)].map((_, i) => <Star key={i} size={18} className="opacity-20" />)
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <p className="ml-1 mt-4 text-[10px] opacity-55 uppercase tracking-widest">About this place:</p>
                                    <p className='mx-1 text-md mr-2 leading-relaxed'>{selectedLocation.description || "No description available."}</p>
                                </div>
                                <div className='ml-1 mt-6 text-[10px] opacity-55 uppercase tracking-widest'>
                                    {selectedLocation && (<p>Coordinates: ({selectedLocation.pos.x}, {selectedLocation.pos.z})</p>)}
                                    {selectedLocation && (<p>Dictance From Center: {selectedLocation.distFromOrigin}</p>)}
                                    {selectedLocation && (<p>Distance From Fault Line: {getDistanceToFault(selectedLocation.pos)}</p>)}
                                </div>
                            </div>
                        </>
                    )}
                    {modeRef.current == "Earthquake" && (
                        <> 
                            <div className="flex justify-center mt-2 text-[13px] text-red-500 opacity-55 uppercase tracking-[0.2em]">
                                <p>Earthquake Simulation</p>
                            </div>
                            <div className="h-14.3 mt-6 z-10 flex flex-col gap-2 p-1.5 bg-white/[0.1] backdrop-blur-sm border border-white/20 rounded-md">
                                <div className="flex justify-between items-center pr-1">
                                    <p className="text-[10px] opacity-55 uppercase tracking-[0.3em]">Magnitude</p>
                                    <span className="text-[10px] font-mono text-white/80">{magnitude}</span>
                                </div>

                                <input type="range" min={4} max={8.5} step={0.01} value={magnitude} onChange={(e) => setMagnitude(parseFloat(e.target.value))}  className='my-2 w-full h-1 bg-red-500/70 rounded-lg appearance-none cursor-pointer
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:w-2
                                [&::-webkit-slider-thumb]:h-2
                                [&::-webkit-slider-thumb]:bg-red-500
                                [&::-webkit-slider-thumb]:rounded-full
                                [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                [&::-webkit-slider-thumb]:transition-all
                                hover:[&::-webkit-slider-thumb]:scale-100' />
                            </div>
                            <div className="mt-4 z-10 flex flex-col gap-2 p-1.5 bg-white/[0.1] backdrop-blur-sm border border-white/20 rounded-md">
                                <div className="flex justify-between items-center pr-1">
                                    <p className="text-[10px] opacity-55 uppercase tracking-[0.3em]">Focal Depth</p>
                                    <span className="text-[10px] font-mono text-white/80">{depth} KM</span>
                                </div>
                                
                                <input 
                                    type="range" 
                                    min={2} 
                                    max={50} 
                                    step={1} 
                                    value={depth} 
                                    onChange={(e) => setDepth(parseInt(e.target.value))}  
                                    className='my-2 w-full h-1 bg-red-500/70 rounded-lg appearance-none cursor-pointer
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:w-2
                                    [&::-webkit-slider-thumb]:h-2
                                    [&::-webkit-slider-thumb]:bg-white
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)]
                                    [&::-webkit-slider-thumb]:transition-all
                                    hover:[&::-webkit-slider-thumb]:scale-100' 
                                />
                            </div>
                            <button onClick={() => {isShaking ? setIsShaking(false) : setIsShaking(true)}} className="w-[45%] mt-4 p-3 rounded flex justify-center align-center border border-white/20 bg-white/[0.1] transition-all duration-200 hover:bg-white/20">
                                <p className="text-[10px] opacity-55 uppercase tracking-[0.3em]">{!isShaking ? "Start Shaking" : "Stop Shaking"}</p>
                            </button>
                            <button onClick={() => {resetBuildingPositions()}} className="w-[45%] mt-4 p-3 rounded flex justify-center align-center border border-white/20 bg-white/[0.1] transition-all duration-200 hover:bg-white/20">
                                <p className="text-[10px] opacity-55 uppercase tracking-[0.3em]">Reset Positions</p>
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col gap-2 p-1 bg-white/[0.03] backdrop-blur-sm border border-white/20 rounded-md'>
                <div className="flex align-center ml-1 text-[11px] gap-1 opacity-55 uppercase tracking-widest">
                    <TriangleAlert strokeWidth={1} size={20}/>
                    <p className='mr-2'>Calamity Simulations</p>
                </div>
                <div className='flex gap-1'>
                    <button onClick={() => {setMode("Earthquake"); sideBarToggle(true);}} title="Earthquake" className='text-white/40 flex justify-center align-center border border-white/20 rounded p-1 hover:text-white hover:bg-white/10 transition-all duration-250'>
                        <Activity />
                    </button>
                    <button title="Flood" className='text-white/40 flex justify-center align-center border border-white/20 rounded p-1 hover:text-white hover:bg-white/10 transition-all duration-250'>
                        <Droplets />
                    </button>
                </div>
            </div>

            <div ref={mountRef} className="w-full h-full" />
        </div>
    );
}