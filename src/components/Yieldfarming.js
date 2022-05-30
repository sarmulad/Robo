import { useTranslation } from 'react-i18next';
import './YieldFarming.css'

function YieldFarming() {

    const {t} = useTranslation()
    return (
      <div className='Yieldfarming'>
            <div className='container'>
                    <div className='center'>
                        <h1 className='Yieldfarming-header'>Yield Farming</h1>
                    </div>
                    <div className='yieldfarming-container'>

                        <div className='yieldfarming-content right'>
                            <div className='yield-col-1'>
                                 <p>{t('Yield_farming_ben1')}</p>
                            </div>
                        </div>

                        <div className='yieldfarming-content left'>
                            <div className='yield-col-1'>
                                 <p>{t('Yield_farming_ben2')}</p>
                            </div>
                        </div>

                        <div className='yieldfarming-content right'>
                            <div className='yield-col-1'>
                                <p>{t('Yield_farming_ben3')}</p>
                            </div>
                        </div>
                    </div>
            </div>
      </div>
    );
  }
  
  export default YieldFarming;
  