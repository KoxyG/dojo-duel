import {  useEffect, useState } from 'react';
import Waiting4Opponet from './UI/Elements/Waiting4Opp';
import StartMenu from './UI/Elements/StartMenu';
import { UseDojoContext } from './DojoContext';
import Canvas from './UI/Elements/Canvas';



export const App = () => {
 
  const {mode, setMode} = UseDojoContext();


  useEffect(() => {
    if (mode === 'start') {
      console.log(mode)
      // setWinner(undefined);
    } else if (mode === 'waiting') {
      console.log(mode)
    } else if (mode === 'battle') {
      console.log(mode);
    }
  }, [mode]);



  return (
    <div className="">
  {mode === 'start' ? (
    <StartMenu />
  ) : mode === 'waiting' ? (
    <Waiting4Opponet onWaitClick={() => setMode('waiting')} />
  ) : (
    <Canvas />
  )}
</div>

  );
};