import React from 'react'
import './Tokenomics.css'
import tokenomics1 from '../assets/Group 3.svg'
import tokenomics2 from '../assets/Group 4.svg'
import { useTranslation } from 'react-i18next'



const Tokenomics = () => {
    const {t} = useTranslation()

    return (
        <div className='Tokenomics'>
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <h2>Tokenomics</h2>
                    <p>{t('Tokenomics_text')} </p>
                    
                </div>

                <div className='tokenomics-img'>
                     <img src={tokenomics1}  alt='tokenomics-img' />
                     <img src={tokenomics2}  alt='tokenomics-img' />
                    
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
