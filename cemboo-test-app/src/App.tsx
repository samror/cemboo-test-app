import React, { useState } from 'react';

import './App.css';
import SideBar from './components/SideBar';
import WorkSpace from './components/WorkSpace';
import SideBarMob from './components/SideBarMob';

function App() {
  const [navOpened, setNavOpened] = useState(false)
  return (
    <main className=''>
      <SideBar/>
      <SideBarMob navOpened={navOpened} setNavOpened={setNavOpened} />
      <WorkSpace setNavOpened={setNavOpened} />
    </main>
  );
}

export default App;
