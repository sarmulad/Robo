import React from 'react'
import { useTranslation } from 'react-i18next'
import './Roadmap.css'




const Roadmap = () => {

    const {t} = useTranslation()
    return (
        <div className='Roadmap'>
            <div className='container'>
                {/* Left Side */}
                <div className='center'>
                    <h2>Roadmap</h2>
                    <p className='center-p'>{t('Roadmap_text')}</p>
                </div>

                <div className='phase-container'>
                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                             <h2>{t('Phase1')} <span style={{color:'white'}}>{t('Phase1_white')}</span></h2>
                            <p>{t('Phase1_text')} </p>
                        </div>
                    </div>

                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>{t('Phase2')} <span style={{color:'white'}}>{t('Phase2_white')}</span></h2>
                            <p>{t('Phase2_text')} </p>
                        </div>
                    </div>

                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>{t('Phase3')} <span style={{color:'white'}}>{t('Phase3_white')}</span></h2>
                            <p>{t('Phase3_text')} </p>
                        </div>
                    </div>
                  

                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                             <h2>{t('Phase4')} <span style={{color:'white'}}>{t('Phase4_white')}</span></h2>
                            <p>{t('Phase4_text')} </p>
                        </div>
                    </div>
                    <div className='phase'>
                            <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>{t('Phase5')} <span style={{color:'white'}}>{t('Phase5_white')}</span></h2>
                            <p>{t('Phase5_text')} </p>
                        </div>
                    </div>
                    <div className='phase'>
                         <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>{t('Phase6')} <span style={{color:'white'}}>{t('Phase6_white')}</span></h2>
                            <p>{t('Phase6_text')} </p>
                        </div>
                    </div>
                    <div className='phase'>                       
                            <div className='circle'></div>
                        <div className='phase-item'>
                             <h2>{t('Phase7')} <span style={{color:'white'}}>{t('Phase7_white')}</span></h2>
                             <p>{t('Phase7_text')} </p>
                        </div>
                    </div>
                    <div className='phase'>    
                        <div className='circle'></div>                         
                        <div className='phase-item'>
                            <h2>{t('Phase8')} <span style={{color:'white'}}>{t('Phase8_white')}</span></h2>
                            <p>{t('Phase8_text')} </p>
                        </div>
                    </div>
                    <div className='phase'>                             
                        <div className='circle'></div>
                        <div className='phase-item'  style={{marginBottom:'0px',padding:'0px', height:'0px'}}>
                            <h2>{t('Phase9')} <span style={{color:'white'}}>{t('Phase9_white')}</span></h2>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    )
}

export default Roadmap
