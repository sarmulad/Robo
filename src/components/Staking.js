import { useTranslation } from 'react-i18next';
import './Staking.css'

function Staking() {

    const {t} = useTranslation()
    return (
      <div className='staking'>
            <div className='container'>
                    <div className='center'>
                        <h1 className='staking-header'>Staking</h1>
                    </div>

                    <div className='staking-content'>
                        <div className='staking-col-1'>
                             <p>{t('Staking_ben1')}</p>
                        </div>
                    </div>

                    <div className='staking-content end'>
                        <div className='staking-col-1'>
                             <p>{t('Staking_ben2')}</p>
                        </div>
                    </div>

                    <div className='staking-content end-1'>
                        <div className='staking-col-1'>
                            <p>{t('Staking_ben3')}</p>
                        </div>
                    </div>
            </div>
      </div>
    );
  }
  
  export default Staking;
  