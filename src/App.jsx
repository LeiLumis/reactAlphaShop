import { useState } from 'react';
import  styles from  "./App.module.css";
import { StepProgress } from './components/StepProgess/StepProgess.jsx';
import { ProgessControl } from './components/ProgessControl/ProgessControl.jsx';
import { StepOne } from './components/Step/StepOne.jsx';
import { StepTwo } from './components/Step/StepTwo.jsx';
import { StepThree } from './components/Step/StepThree.jsx';
import { Cart } from './components/Cart/Cart.jsx';

export function StepPage({step}){

  if(step <= 0){
    return(
      <StepOne/>
    )
  }else if(step === 1){
    return(
      <StepTwo/>
    )
  }else if(step >= 2){
    return(
      <StepThree/>
    )
  }
}


export default function App() {

  const[step, setStep] = useState(0);

  function nextClick(){
    if(step < 2){
    setStep(step + 1)
  }
     console.log(step)
  }

  function prevClick(){
    if(step > 0){
    setStep(step - 1)
    }
    console.log(step)
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.stepForm}>
          <StepProgress step={step}/>
          <section>
            <StepPage step={step}/>
          </section>
          <ProgessControl nextClick={nextClick} prevClick={prevClick} step={step}/>
        </div>
        <div className={styles.cart}>
          <Cart/>
        </div>
      </div>
    </div>
  )
}