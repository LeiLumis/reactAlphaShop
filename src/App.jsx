import  styles from  "./App.module.css";
import { StepProgress } from './components/StepProgess/StepProgess.jsx';
import { ProgessControl } from './components/ProgessControl/ProgessControl.jsx';
import { StepOne } from './components/Step/StepOne.jsx';
import { StepTwo } from './components/Step/StepTwo.jsx';
import { StepThree } from './components/Step/StepThree.jsx';
import { Cart } from './components/Cart/Cart.jsx';

export default function App() {
  return (
    <><div className={styles.main}>
    <div className={styles.stepForm}>
    <StepProgress/>
    <StepOne/>
    {/* <StepTwo/>
    <StepThree/> */}
    <ProgessControl/>
    </div>
    <div className={styles.cart}>
    <Cart/>
    </div>
    </div>
    </>
  )
}