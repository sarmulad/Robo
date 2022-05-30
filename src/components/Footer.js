import React from 'react'
import logo from '../assets/logo.svg'
import { FaTelegram, FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Footer.css'
import { useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <img src={logo} alt='logos'/>
                </div>
                <div className='col'>
                    <h5>{t('Connect_with_us')}</h5>
                        <div className='icon-container'>
                            <a href='/'><FaTelegram className='icon'/></a>
                            <a href='/'><FaFacebook className='icon'/></a>
                            <a href='/'><FaYoutube className='icon'/></a>
                            <a href='/'><FaTwitter className='icon'/></a>
                            <a href='/'><FaInstagram className='icon'/></a>
                        </div>
                </div>
            </div>
            <p>Copyright © 2022 Mountanaz Token. All rights reserved</p>
            
        </div>
    )
}

export default Footer
