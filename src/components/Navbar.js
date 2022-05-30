import React, {useState, useEffect,useRef} from 'react'
import  i18next  from '../i18n'
import cookies from 'js-cookie'
import "flag-icon-css/css/flag-icons.min.css"
import { Languages } from './Languages'
import logo from '../assets/logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import './Navbar.css'
import { useTranslation} from "react-i18next";



const Navbar = () => {
    const { t } = useTranslation();
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = Languages.find((l) => l.code === currentLanguageCode)

    useEffect(() => {

        document.body.dir = currentLanguage.dir || 'ltr'

        const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
        }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
        };
    }, [dropdown, currentLanguage]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    

    return (
        <div className='header'>
            <div className='container'>
                <div>
                    <img src={logo} width='200px' alt='logo'  className='logo'/>    
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Roadmap</a>
                    </li>
                    <li>
                        <a href='/'>Tokenomics</a>
                    </li>
                    <li>
                        <a href='/'>Whitepaper</a>
                    </li>
                    <li>
                        <a href='/'>FAQ</a>
                    </li>
                    <li 
                        className='country_code'
                        ref={ref}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                     >
                        <button
                          type="button"
                          className='btn lang-btn'
                          aria-haspopup="menu"
                          aria-expanded={dropdown ? "true" : "false"}
                          onClick={() => setDropdown((prev) => !prev)}
                        >
                          <span className={`flag-icon flag-icon-${t("country_code")}`}>
                           </span>
                           {currentLanguageCode}

                        <AiFillCaretDown  style={{color: 'white'}}/>
                        </button>

                         <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                             <li><p className= 'language-title'>{t('Language')}</p></li>
                            {Languages.map(({ code, name, country_code }) => (
                                <li key={country_code}>
                                <button
                                className='btn lang-btn'
                                    // className={classNames('dropdown-item', {
                                    // disabled: currentLanguageCode === code,
                                    // })}
                                    onClick={() => {
                                    i18next.changeLanguage(code)
                                    }}
                                >
                                    <span
                                    className={`flag-icon flag-icon-${country_code}`}
                                    style={{
                                        opacity: currentLanguageCode === code ? 0.5 : 1,
                                    }}
                                    ></span>
                                    {name} 
                                </button>
                                </li>
                            ))}

                         </ul>
                    </li>
                    <li>

                        <div className='btn-group wallet-btn'>
                            <button className='btn wallet-btn'>Enter Presale<AiFillPlusCircle/></button>
                        </div>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes className='centreham' size={20} style={{color: 'white'}}/>) : (<FaBars size={24} style={{color: 'white'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
