import React from 'react'
import './Features.css'
import userIcon from '../assets/Icons/Simplified User Interface Icon.svg'
import Scaleability from '../assets/Icons/Scaleability Icon.svg'
import Decentralization from '../assets/Icons/Decentralization Icon.svg'
import Community from '../assets/Icons/Community Icon.svg'
import ReadMore from './ReadMore'
import { useTranslation } from 'react-i18next'

const Features = () => {
    const{t} = useTranslation()
    return (
        <div className='features'>
            <h1>{t('Our_Features')}</h1>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={userIcon}  alt='Simplified User Interface Icon' />
                    <h2>{t('Ft_stake_your_tokens')}</h2>
                    <ReadMore text={t('Ft_stake_your_tokens_text')} />
                   
                </div>

                {/* right */}
                <div className='right'>
                    <img src={Scaleability}  alt='Scaleability Icon' />
                    <h2>{t('Scalability')}</h2>
                    <ReadMore text={t('Scalability_text')} />
                </div>

            </div>

            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Decentralization}  alt='Simplified User Interface Icon' />
                    <h2>{t('Sustainability_in_Decentralization')}</h2>
                    <ReadMore text={t('Sustainability_in_Decentralization_text')} />
                </div>

                {/* right */}
                <div className='right'>
                    <img src={Community}  alt='Simplified User Interface Icon' />
                    <h2>{t('Community')}</h2>
                    <ReadMore text={t('Community_text')} />
                </div>

            </div>

        </div>
    )
}

export default Features
