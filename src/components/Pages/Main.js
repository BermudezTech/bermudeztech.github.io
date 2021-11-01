import React from 'react';
import '../../styles/Pages/Main.scss';
import Slider from './Slider';

export default function Main(){
    return(
        <>
            <div className="Main">
                <div className="container">
                    <div className="presentation">
                        <div>
                            <h1>Hola. Mi nombre es:</h1>
                            <h2>JOSÉ EDUARDO BERMÚDEZ GARAVITO</h2>
                        </div>
                        <p><span><b>Soy:</b> Desarrollador FRONTEND</span></p>
                    </div>
                    <Slider/>
                </div>
                <button>Mi trabajo &#62;&#62;</button>
            </div>
        </>
    )
}