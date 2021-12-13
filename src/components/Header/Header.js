import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import '../../styles/header/index.scss';
import Social from './Social';

export default function Header({theme, lang, setLang}){
    return(
        <>
            <div className="header">
                <Nav theme={theme} lang={lang}/>
                <Logo theme={theme}/>
                <Social theme={theme} lang={lang} setLang={setLang}/>
                <p></p>
            </div>
        </>
    )
}