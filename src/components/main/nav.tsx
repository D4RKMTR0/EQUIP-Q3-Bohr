import React, { Map, ScrollText } from 'lucide-react';

interface NavbarProps {
  setActiveTab: (tab: 'Map' | 'Credits') => void;
  activeTab: string;
}

export default function Navbar({ setActiveTab, activeTab }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 z-[100] flex justify-between h-16 items-center font-geist header w-full">
      <h1 className="leading-none font-geist text-[25px] font-semibold ml-8 text-white">
        EQUIP Q3 Bohr
      </h1>
      <nav className="backdrop-blur-xl navbar mr-8">
        <ul className="flex flex-row list-none">
          <li className="mx-1">
            <button
              title="View the map"
              onClick={() => setActiveTab('Map')}
              id="MapButton"
              className={`flex items-center gap-1 font-geist button ${
                activeTab === 'Map' ? 'isActive' : ''
              }`}
            >
              <Map size={22} strokeWidth={1} />
              Map
            </button>
          </li>
          <li className="mx-2">
            <button
              title="Contributions"
              onClick={() => setActiveTab('Credits')}
              id="CreditsButton"
              className={`flex items-center gap-1 font-geist button ${
                activeTab === 'Credits' ? 'isActive' : ''
              }`}
            >
              <ScrollText size={22} strokeWidth={1} />
              Credits
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}