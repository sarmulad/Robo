import Navbar from '../components/Navbar';
import './Benefit.css'
import YieldFarming from '../components/Yieldfarming';
import Staking from '../components/Staking';
import Presale from '../components/Presale';
import { useTranslation } from 'react-i18next';

function Benefit() {

  const{t} = useTranslation()
    return (
      <div className='benefit'>
        <Navbar/>
        <h1 className='benefit-header'>{t('Benefit_of_mon')} </h1>
        <YieldFarming/>
        <Staking/>
        <Presale/>
      </div>
    );
  }
  
  export default Benefit;
  