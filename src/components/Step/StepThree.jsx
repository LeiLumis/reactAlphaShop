import styles from "./StepThree.module.css"

export function StepThree(){
  return(
    <>
    <form className={styles.payForm} data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className="form-body col col-12">
        <div className={styles.inputLine}>
          <div className={styles.inputGroup1}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input className={styles.InputStyle} type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className={styles.inputLine}>
          <div className={styles.inputGroup1}>
            <div className={styles.inputLabel}>卡號</div>
            <input className={styles.InputStyle} type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>
        <div className={styles.inputLine}>
          <div className={styles.inputGroup2}>
            <div className={styles.inputLabel}>有效期限</div>
            <input className={styles.InputStyle} type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.inputGroup3}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input className={styles.InputStyle} type="text" placeholder="123" />
          </div>
        </div>
      </section>
    </form>
    </>
  )
}