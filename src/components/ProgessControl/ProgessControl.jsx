import styles from "./ProgessControl.module.css"
import { ReactComponent as RightArrow} from '../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from '../../icons/left-arrow.svg'



export function ProgessControl({step,nextClick,prevClick}){

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
        <button className={styles.next}>
          確認下單
        </button>
      </section>

      </section>
    )
  }

  //  return (
  //    <>
  //   <section className={styles.progressControlContainer}>
  //     <hr className={styles.divider} />
      
  //     <section className={styles.buttonGroup} data-phase="address">
  //       <button className={styles.empty}>
  //       </button>
  //       <button className={styles.next} onClick={nextClick}>
  //         下一步
  //         <RightArrow className={styles.rightArrow}/>
  //       </button>
  //     </section>

  //     <section className={styles.buttonGroup} data-phase="shipping">
  //       <button className={styles.prev} onClick={prevClick}>
  //         <LeftArrow className={styles.leftArrow}/>
  //         上一步
  //       </button>
  //       <button className={styles.next} onClick={nextClick}>
  //         下一步
  //         <RightArrow className={styles.rightArrow}/>
  //       </button>
  //     </section>

  //     <section className={styles.buttonGroup} data-phase="credit-card">
  //       <button className={styles.prev} onClick={prevClick}>
  //         <LeftArrow className={styles.leftArrow}/>
  //         上一步
  //       </button>
  //       <button className={styles.next}>
  //         確認下單
  //       </button>
  //     </section>

  //   </section>
  //   </>
  // )
}