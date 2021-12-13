import React from 'react';
import YouTube from '../../img/youtube.svg';
import GitHub from '../../img/github.svg';

export default function Social({theme, setLang}){
    let socialColor = {
        filter: theme ? 'invert(1)' : 'invert(0)',
    }
    let changeLang = (e) => {
        setLang(e.target.selectedOptions[0].value);
    }
    return (
        <>
            <div className="rightHeader">
                <div className={theme ? "lang dark": "lang light"}>
                    <select onChange={changeLang}>
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div className={theme ? "Social dark": "Social light"}>
                    <a href="https://www.youtube.com/channel/UCA_hRDpRJLkSRDA62xKNFaQ" target="_blank" rel="noreferrer">
                        <img src={YouTube} alt="YouTube" style={socialColor}/>
                    </a>
                    <a href="https://github.com/JBermudezG" target="_blank" rel="noreferrer">
                        <img src={GitHub} alt="GitHub" style={socialColor}/>
                    </a>
                </div>
            </div>
        </>
    )
}