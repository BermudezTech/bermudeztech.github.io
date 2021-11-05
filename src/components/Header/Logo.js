import React from 'react';
import '../../styles/header/logo.scss';

export default function Logo({theme}){
    return(
        <>
            <div className={theme ? 'logo dark' : 'logo light'}>
                <p className="bermudez">BERMUDEZ</p>
                <p className="signs">&#60; / &#62;</p>
                <p className="web">WEB</p>
            </div>
        </>
    )
}