import React, { FC } from "react";

interface StartMenuProps {
  onStartClick: () => void; // Define the type for onStartClick prop
}

const StartMenu: FC<StartMenuProps> = ({ onStartClick }) => {
  return (
    <div className="min-h-screen text-white flex justify-center
     items-center ">
      <button className="p-4 border text-white" onClick={onStartClick}>Start Game</button>
    </div>
  );
};

export default StartMenu;
