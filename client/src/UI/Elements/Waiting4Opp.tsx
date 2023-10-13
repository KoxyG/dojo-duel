import { FC } from "react";



interface Waiting4OpponentProps {
     onWaitClick: () => void; // Define the type for onStartClick prop
 }


const Waiting4Opponet: FC<Waiting4OpponentProps> = ()  => {

  



  return (
    <div>
      <div>
        <div className="text-white pt-[50px]">
          <p>processing.....future development.</p>
        </div>
      </div>
    </div>
  );
};

export default Waiting4Opponet;
