import React from 'react'
import { useTranslation } from 'react-i18next'
import './Presale.css'



const Presale = () => {

    const{ t} = useTranslation()
    return (
        <div className='Presale'>
            <div className='container'>
                <div className='center'>
                        <h1>{t('Presale_text')} <span className='green'>{t('Presale_text_green')}</span></h1>
                        <div className='button-container presale-btn'>
                            <button className='btn buy'>{t('Enter_presale_btn')}</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Presale
