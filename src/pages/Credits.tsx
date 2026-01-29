import React from 'react';
import { RevealOnScroll } from '../hooks/revealOnScroll';

// Shared styles for the category headers
const CategoryHeader = ({ title}: { title: string;}) => (
  <div className="flex flex-col items-center mb-6 group">
    <div className="flex items-center gap-2">
      <h2 className="text-[14px] text-white opacity-90 uppercase tracking-[0.3em] font-bold">
        {title}
      </h2>
    </div>
    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-2 transition-all duration-500 group-hover:w-full" />
  </div>
);

const Credits = () => {
  const sections = [
    {
      title: "Mappers",
      members: [
        "Fogarty (Lead Developer)",
        "Garcia (Coordinates)",
        "Jose (Coordinates)",
        "Marquina (Research/Locations)"
      ]
    },
    {
      title: "Presenters",
      members: [
        "Hadji Basher (Script/PPT)",
        "Galicia (Script/Choreography)",
        "Laurito (Script)",
        "David (Script)",
        "Quisido", "Dela Cruz", "Doctor", "Laroya", "Quismorio"
      ]
    },
    {
      title: "Researchers",
      members: [
        "Bañares (Script)", "Valverde (PPT)", "Buenafe", "Bascon", "Bejasa", 
        "Cabase", "Chavez", "Clemente", "Gomez", "Obina", "Ramos", 
        "Rocero", "Roxas", "Sabilla"
      ]
    },
    {
      title: "Yell & Performance",
      members: [
        "Raquedan", "Totaan", "Vasquez", "De Jesus", "Jordan", 
        "Mercado", "Argamosa (Dancer)", "Enriquez (Props)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-xl text-white py-20 px-4 overflow-y-auto">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <h1 className="mt-15 text-3xl font-light tracking-[0.5em] uppercase opacity-60">Project Credits</h1>
        </div>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {sections.map((section, idx) => (
          <RevealOnScroll key={section.title}>
            <div className="flex flex-col items-center">
              <CategoryHeader title={section.title}/>
              <ul className="text-center space-y-2">
                {section.members.map((name) => (
                  <li key={name} className="text-[12px] text-white/60 hover:text-red-400 transition-colors cursor-default">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Credits;