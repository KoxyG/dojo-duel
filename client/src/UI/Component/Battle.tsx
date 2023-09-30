import Characters from "../Shared/Characters";
import PlayerSummary from "./PlayerSummary/PlayerSummary";
export const Battle = () => {
 

  return (
    <div style={{ position: 'relative' }}>
      <div  className="flex justify-between">
      <PlayerSummary health={60} maxHealth={100} name={Characters.playerStatus.name} /> vs
      <PlayerSummary health={30} maxHealth={100} name={Characters.oponentStatus.name} />
      </div>

    </div>
  );
};
