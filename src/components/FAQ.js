import React from "react";
import Accordion from "../components/Accordion";
import './FAQ.css'
import coingecko from '../assets/coingecko.svg'
import coinmarketcap from '../assets/coinmarketcap.svg'
import pancakeswap from '../assets/pancakeswap.svg'
import gecko from '../assets/Vectorgecko.svg'
import cmc from '../assets/cmc.svg'
import pancake from '../assets/pancake.svg'
import { useTranslation } from "react-i18next";

const FAQ = () => {
    const {t} = useTranslation()
    return (
        <div className="FAQ">
            <div className="container">
                <h1>{t('Faq')}</h1>
            <Accordion
                title={t('What_is_Mountanaz')}
                content={t('What_is_Mountanaz_ans')}
             />
              <Accordion
                title={t("Multi_chain_work")}
                content={t("Multi_chain_work_ans")}
             />
              <Accordion
                title={t("Scam_prevention")}
                content={t("Scam_prevention_ans")}
             />
              <Accordion
                title={t("How_does_staking_work")}
                content={t("How_does_staking_work_ans")}
             />
              <Accordion
                title={t("How_does_yield_work")}
                content={t("How_does_yield_work_ans")}
             />
              <Accordion
                title={t("Borrower")}
                content={t("Borrower_ans")}
             />
            <div className="faq-icons">
                <div className='icons-mobile'>
                    <img src={gecko} width='40px' alt='logo'  /> 
                    <img src={cmc} width='40px' alt='logo'  />
                    <img src={pancake} width='40px' alt='logo'  />    
                </div>

                <div className='icons-desktop'>
                    <img src={coingecko} width='200px' alt='logo'  /> 
                    <img src={coinmarketcap} width='200px' alt='logo'  />
                    <img src={pancakeswap} width='200px' alt='logo'  />    
                </div>

              </div>
            </div>
        </div>
    )
}

export default FAQ
