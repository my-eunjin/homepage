import { useState, useEffect, useRef } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
//https://bootswatch.com/lux/
import './App.css';
import Home from './components/Home';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  const [showHome, setShowHome] = useState(true);
  return (
    <div className="App">
      {showHome && <Home onHide={() => setShowHome(false)} />}
      {!showHome && (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      )}
    </div>
  );
}

export default App;
