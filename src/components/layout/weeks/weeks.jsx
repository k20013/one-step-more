import styles from './weeks.module.css';

const Weeks = ({ livedWeeks }) => {

  return (
    <div className={styles.weeksContainer}>

      {Array(
        livedWeeks > 3640 ? 
          livedWeeks > 4160 ? 
            livedWeeks > 4680 ? 5200
            : 4680
          : 4160
        : 3640
      ).fill().map((_, i) => (
        <span title={`
          ${i + 1 > 52 ? `${Math.floor((i + 1 )/ 52)} year -` : ""} ${i + 1} week
        `}>
          <div className={`${styles.week} ${i < livedWeeks ? styles.lived : ""}`}></div>
        </span>
      ))}

    </div>
  )
}
export default Weeks