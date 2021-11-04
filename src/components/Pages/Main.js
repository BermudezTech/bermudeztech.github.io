import React, {useEffect, useState} from 'react';
import '../../styles/Pages/Main.scss';
import Slider from './Slider';

export default function Main(){
    let [typingText, setTypingText] = useState("");
    let [phraseNumber, setPhraseNumber] = useState(0);
    let [phrasePosition, setPhrasePosition] = useState(0);
    let [tempLetter, setTempLetter] = useState("");
    let phrases = ["Desarrollador FRONTEND", 
                "Estudiante de ingeniería", 
                "Desarrollador de software"];

    let typePhrase = () => {
        if(phrasePosition <= phrases[phraseNumber].length){
            setPhrasePosition(phrasePosition + 1);
            setTempLetter(phrases[phraseNumber][phrasePosition]);
        }else{
            if(phraseNumber < (phrases.length - 1)){
                setPhraseNumber(phraseNumber + 1);
            }else{
                setPhraseNumber(0);
            }
            let changePhrase = () => {
                setTypingText("");
                setPhrasePosition(0);
                setTempLetter("");
            }
            setTimeout(changePhrase, 2000);
        }
    }

    useEffect(() => {
        if(typingText !== undefined && tempLetter !== undefined)
        setTypingText(`${typingText}${tempLetter}`);

        let temporizador = setTimeout(typePhrase, 40);
        return () => clearTimeout(temporizador);
        // eslint-disable-next-line
    }, [phrasePosition]);

    return(
        <>
            <div className="Main">
                <div className="container">
                    <div className="presentation">
                        <div>
                            <h1>Hola. Mi nombre es:</h1>
                            <h2>JOSÉ EDUARDO BERMÚDEZ GARAVITO</h2>
                        </div>
                        <p><span><b>Soy:</b> {typingText}<b className="cursor">|</b></span></p>
                    </div>
                    <Slider/>
                </div>
                <button>Mi trabajo &#62;&#62;</button>
            </div>
        </>
    )
}