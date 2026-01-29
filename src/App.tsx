import {useState} from 'react';
import Navbar from './components/main/nav.tsx';
import Map from './pages/Map.tsx';
import Credits from './pages/Credits.tsx'
import './stylesheets/App.css';

function App() {

  const [activeTab, setActiveTab] = useState('Credits')

  return (
    <>
        {activeTab != "Map" && (
          <Navbar setActiveTab={setActiveTab} activeTab={activeTab}/>
        )}
        {activeTab == "Map" && (<Map setActiveTab={setActiveTab}/>)}
        {activeTab == 'Credits' && (<Credits />)}
    </>
  );
}

export default App