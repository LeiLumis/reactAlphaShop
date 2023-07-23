import './App.css';
import { StepProgress } from './components/StepProgess/StepProgess.jsx';
import { ProgessControl } from './components/ProgessControl/ProgessControl.jsx';
import { StepOne } from './components/Step/StepOne.jsx';
import { StepTwo } from './components/Step/StepTwo.jsx';
import { StepThree } from './components/Step/StepThree.jsx';

export default function App() {
  return (
    <>
    <StepProgress/>
    <StepOne/>
    {/* <StepTwo/>
    <StepThree/> */}
    <ProgessControl/>
    </>
  )
}