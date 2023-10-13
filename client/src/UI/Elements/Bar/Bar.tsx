import styles from './styles.module.css'


interface BarProps {
     value: number;
     maxValue: number;
}

const Bar: React.FC<BarProps> = ({ value, maxValue}) => {
  return (
    <div className={styles.main}>
      <div className={styles.max}>
        <div
          className={styles.value}
          style={{ width: `${(value /  maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;