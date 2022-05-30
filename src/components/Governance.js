import React from 'react'
import { useTranslation } from 'react-i18next'
import './Governance.css'

const Governance = () => {
    const {t} = useTranslation()
    return (
        <div className='Governance'>
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <h2>{t('Governance')}</h2>
                    <p>{t('Governance_text')}</p>
                    <p>{t('Governance_text2')}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Governance
