import { FC } from "react";
import {
 
  disconnect,
  ConnectedStarknetWindowObject,
} from "@argent/get-starknet";
import { UseDojoContext } from "../../DojoContext";


interface Waiting4OpponentProps {
     onWaitClick: () => void; // Define the type for onStartClick prop
 }


const Waiting4Opponet: FC<Waiting4OpponentProps> = ({ onWaitClick })  => {

  const {setMode} = UseDojoContext();



  return (
    <div>
      <div>
        {/* <h1 className="text-white text-3xl sm:text-4xl font-bold leading-10 pt-[60px] pb-[120px]">
          Dojo Duel
        </h1> */}

        <div className="text-white pt-[50px]">
          <p>processing.....future development.</p>
        </div>

       
      </div>
    </div>
  );
};

export default Waiting4Opponet;
