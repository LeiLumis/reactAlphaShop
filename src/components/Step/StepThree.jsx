import styles from "./StepThree.module.css";
import { useContext } from "react";
import  PayInfoContext  from "../Context/PayInfoContext";

export function StepThree(){
  const {payInfo, setPayInfo} = useContext(PayInfoContext);

  function handleOnChange(e){
    setPayInfo({
      ...payInfo,
      [e.target.name]: e.target.value,
    });
  }
  // const handleOnChange = (e) => {
    
  // };

  return(
    <>
    <form className={styles.payForm} data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className="form-body col col-12">
        <div className={styles.inputLine}>
          <div className={styles.inputGroup1}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input className={styles.InputStyle} name="cardName" type="text" placeholder="John Doe" onChange={(e) => handleOnChange(e)} />
          </div>
        </div>
        <div className={styles.inputLine}>
          <div className={styles.inputGroup1}>
            <div className={styles.inputLabel}>卡號</div>
            <input className={styles.InputStyle} name="cardNumber" type="text" placeholder="1111 2222 3333 4444" onChange={(e) => handleOnChange(e)}/>
          </div>
        </div>
        <div className={styles.inputLine}>
          <div className={styles.inputGroup2}>
            <div className={styles.inputLabel}>有效期限</div>
            <input className={styles.InputStyle} name="cardExpireDate" type="text" placeholder="MM/YY" onChange={(e) => handleOnChange(e)}/>
          </div>
          <div className={styles.inputGroup3}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input className={styles.InputStyle} name="cardCVC" type="text" placeholder="123" onChange={(e) => handleOnChange(e)}/>
          </div>
        </div>
      </section>
    </form>
    </>
  )
}