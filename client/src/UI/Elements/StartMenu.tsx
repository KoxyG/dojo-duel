import React, { useState } from "react";
import WalletService from "../Blockchain service/WalletService";
import Waiting4Opponet from "./Waiting4Opp";
import { UseDojoContext } from "../../DojoContext";

const StartMenu = () => {
  const { connection, connectWallet, disconnectWallet } = WalletService();
  const {setMode} = UseDojoContext();
  

  // New game 
  const NewGameJoin = () => {
    console.log("Joining a game now")
    setMode("battle");
  };

  return (
    <>
      <div className="text-white grid">
        <h1 className="text-white text-3xl sm:text-4xl font-bold leading-10 pt-[60px] pb-[120px]">
          Dojo Duel
        </h1>
        {!connection ? (
          <>
            <div className="py-[60px]">
              <button
                className="p-4 border Button text-white"
                onClick={connectWallet}
              >
                New Game
              </button>
            </div>
            <div>
              <button
                className="p-4 border Button  text-white"
                onClick={() => console.log("Join Game clicked")}
              >
                Join Game
              </button>
            </div>
          </>
        ) : (
          <>
            <Waiting4Opponet onWaitClick={() => console.log("waiting")} />

            <div className="flex justify-between text-white pt-[200px]">
              <button
                className="p-4 Button  border"
                onClick={async () => {
                  await disconnectWallet();
                }}
              >
                Cancel
              </button>

              <button onClick={NewGameJoin} className="p-4 Button  border">
                Join
              </button>
             
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StartMenu;
