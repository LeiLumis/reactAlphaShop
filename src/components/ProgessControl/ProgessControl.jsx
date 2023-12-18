import styles from "./ProgessControl.module.css";
import { ReactComponent as RightArrow} from '../../icons/right-arrow.svg';
import { ReactComponent as LeftArrow} from '../../icons/left-arrow.svg';
import { useContext } from "react";
import  PayInfoContext  from "../Context/PayInfoContext";
import CartContext from "../Context/CartContext";

export function ProgessControl({step,nextClick,prevClick}){
  
  const {payInfo} = useContext(PayInfoContext);
  const {totalNum} = useContext(CartContext);

  function confirmClick(){
    console.log(`
    持卡人姓名:, ${payInfo.cardName}
    卡號:, ${payInfo.cardNumber}
    有效期限: ${payInfo.cardExpireDate}
    CVC / CCV: ${payInfo.cardCVC}
    小計: ${totalNum}
    `)
  
}

  if(step <= 0){
    return(
      <section className={styles.progressControlContainer}>
      <hr className={styles.divider} />

      <section className={styles.buttonGroup} data-phase="address">
        <button className={styles.empty}>
        </button>
        <button className={styles.next} onClick={nextClick}>
          下一步
          <RightArrow className={styles.rightArrow}/>
        </button>
      </section>

      </section>
    )
  }else if(step === 1){
    return(
      <section className={styles.progressControlContainer}>
      <hr className={styles.divider} />

      <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.prev} onClick={prevClick}>
          <LeftArrow className={styles.leftArrow}/>
          上一步
        </button>
        <button className={styles.next} onClick={nextClick}>
          下一步
          <RightArrow className={styles.rightArrow}/>
        </button>
      </section> 

      </section>
    )
  }else if(step >= 2){
    return(
      <section className={styles.progressControlContainer}>
      <hr className={styles.divider} />

      <section className={styles.buttonGroup} data-phase="credit-card">
        <button className={styles.prev} onClick={prevClick}>
          <LeftArrow className={styles.leftArrow}/>
          上一步
        </button>
        <button className={styles.next} onClick={confirmClick}>
          確認下單
        </button>
      </section>

      </section>
    )
  }
}