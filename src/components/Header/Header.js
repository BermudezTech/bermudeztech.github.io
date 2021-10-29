import React from 'react';
import Logo from './Logo';
//import Nav from './Nav';
import '../../styles/header/index.scss';

export default function Header(){
    return(
        <>
            <div className="header">
                {/*<Nav />*/}
                <p></p>
                <Logo />
                <p></p>
            </div>
        </>
    )
}