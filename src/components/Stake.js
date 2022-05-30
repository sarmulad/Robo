import React from 'react'
import './Stake.css'
import Staking from '../assets/Staking.png'
import Yield from '../assets/Yield.png'
import Swap from '../assets/Exchange .png'
import { BsChevronRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Stake = () => {
    const {t} = useTranslation()

    return (
        <div className='stake'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Staking} alt='staking-img' />
                </div>

                {/* right */}
                <div className='right'>

                    <h2>{t('Stake_your_tokens')}</h2>
                    <p>{t('Stake_your_tokens_text')}</p>
                    <div className='btn-container'>
                       <Link to='/Benefit' ><button className='btn view'>{t('Learn_more_btn')} <BsChevronRight/></button></Link>
                    </div>
                </div>

            </div>

            <div className='container'>
                {/* right */}
                <div className='right'>

                   <h2>{t('Yield_farming')}</h2>
                    <p>{t('Yield_farming_text')}</p>
                    <div className='btn-container'>
                       <Link to='/Benefit' ><button className='btn view'>{t('Learn_more_btn')} <BsChevronRight/></button></Link>
                    </div>
                </div>

                {/* left */}
                <div className='left order'>
                    <img src={Yield} alt='staking-img' />
                </div>

            </div>

            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Swap} alt='staking-img' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>{t('Swap_token')}</h2>
                    <p>{t('Swap_token_text')}</p>
                    <div className='btn-container'>
                       <Link to='/Benefit' ><button className='btn view'>{t('Learn_more_btn')} <BsChevronRight/></button></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Stake
