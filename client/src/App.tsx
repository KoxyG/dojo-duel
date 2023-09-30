import StartMenu from './UI/Component/StartMenu';
// import { Battle } from './UI/Component/Battle';
import { useEffect, useState } from 'react';
import Canvas from './UI/Component/Canvas';



export const App = () => {
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      console.log(mode)
      // setWinner(undefined);
    }
  }, [mode]);



  return (
    <div className="">
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
        // <StartMenu onStartClick={() => setMode('battle')} />
      )}
      {mode === 'battle' && ( <Canvas  /> )}
    </div>
  );
};