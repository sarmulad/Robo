import React from 'react'
import './Hero.css'
import binance from '../assets/binance.svg'
import polygon from '../assets/polygonlogo.svg'
import solana from '../assets/solana.svg'
import eth from '../assets/eth.svg'
import cardano from '../assets/cardano.svg'
import { BsChevronRight } from "react-icons/bs";
import Navbar from './Navbar'
import { useTranslation} from "react-i18next";



const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className='hero'>
          <Navbar />
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <h1>{t("Header")} <span className='green'>{t('Header_green')}</span></h1>
                    <p>{t("Header_text")}</p>
                    <div className='button-container'>
                        <button className='btn buy'>{t('Header_buy_btn')}</button>
                        <button className='btn view'>{t('Header_chart_btn')} <BsChevronRight/> </button>
                    </div>
                </div>
            </div>
            <div className='icons'>
                 <img src={binance} alt='logo'  className='logo'/>
                 <img src={polygon} alt='logo'  className='logo'/>    
                 <img src={solana} alt='logo'  className='logo'/>    
                 <img src={eth} alt='logo'  className='logo'/>    
                 <img src={cardano} alt='logo'  className='logo'/>    
            </div>
            
            <div className='text'>
                <p>{t('Header_missout_text')}</p>
            </div>
        </div>
    )
}

export default Hero
