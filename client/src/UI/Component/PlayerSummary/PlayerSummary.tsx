import Bar from "../Bar/Bar";
import styles from "./styles.module.css";


interface PlayerSummaryProps {
  health: number;
  maxHealth: number;
  name: string;
}


const PlayerSummary: React.FC<PlayerSummaryProps> = ({ name, health, maxHealth }) => {
  return (
    <div>
     <div className={styles.info}>
     <div className={styles.name}>{name}</div>
     </div>
      <div>
        <Bar value={health} maxValue={maxHealth} />
      </div>
    </div>
  );
};
export default PlayerSummary;
