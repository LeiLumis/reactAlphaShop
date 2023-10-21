import styles from "./StepProgress.module.css"
import { ReactComponent as Complete} from '../../icons/pg-complete.svg'

export function StepProgress({step}){
  return (
  <div className={styles.stepProgress}>
  <h2 className={styles.checkBill}>結帳</h2>
  <section className={styles.progressContainer}>

    <span className={styles.progressGroup} data-phase="address">
      {
        step <= 0 ?
        <span className={styles.progressIconAfter}>
          <span className={styles.textAfter}>1</span>
        </span> : 
        <Complete className={styles.progressIconAfter}/>
      }
      
       <span className={styles.progressLabel}>寄送地址</span>
    </span>

    <span className={styles.progressBar} data-order="1"></span>

    <span className={styles.progressGroup} data-phase="shipping">
      <div>
      {
        step ===0 ? 
        <span className={styles.progressIconBefore}>
          <span className={styles.textBefore}>2</span>
        </span> : step ===1 ?
        <span className={styles.progressIcon}>
          <span className={styles.text}>2</span>
        </span> : 
        <Complete className={styles.progressIconAfter}/>
      }
      </div>
      <span className={styles.progressLabel}>運送方式</span>
    </span>

    <span className={styles.progressBar} data-order="2"></span>

    <span className={styles.progressGroup} data-phase="credit-card">
      <span className={step >= 2 ? styles.progressIcon : styles.progressIconBefore}>
        <span className={step >= 2 ? styles.text : styles.textBefore}>3</span>
      </span>
      <span className={styles.progressLabel}>付款資訊</span>
    </span>

  </section>
  </div>
  )
}