import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import '../../styles/header/index.scss';
import Social from './Social';

export default function Header({theme}){
    return(
        <>
            <div className="header">
                <Nav theme={theme}/>
                <Logo theme={theme}/>
                <Social theme={theme}/>
                <p></p>
            </div>
        </>
    )
}