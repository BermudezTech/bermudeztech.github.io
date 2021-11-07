import React from 'react';
import Logo from './Logo';
//import Nav from './Nav';
import '../../styles/header/index.scss';
// import Social from './Social';

export default function Header({theme}){
    return(
        <>
            <div className="header">
                {/*<Nav />*/}
                <p></p>
                {/* <p>Inicio     Blog     Ingeniería      Sobre mí     Contacto</p> */}
                <Logo theme={theme}/>
                {/* <Social theme={theme}/> */}
                <p></p>
            </div>
        </>
    )
}