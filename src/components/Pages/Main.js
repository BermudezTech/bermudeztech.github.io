import React, {useEffect, useState} from 'react';
import '../../styles/Pages/Main.scss';
import Slider from './Slider';

export default function Main({theme}){
    let [typingText, setTypingText] = useState("");
    let [phraseNumber, setPhraseNumber] = useState(0);
    let [phrasePosition, setPhrasePosition] = useState(0);
    let [tempLetter, setTempLetter] = useState("");
    let phrases = ["Desarrollador FRONTEND", 
                "Estudiante de ingeniería", 
                "Desarrollador de software",
                "Creador de contenido"];

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
            let goBackwards = () => {
                let time = parseInt(500 / phrasePosition);
                let position = phrasePosition;
                console.log(time);
                let erase = () => {
                    position = position - 1;
                    setTypingText(typingText.substring(0, position));
                }
                let timer = setInterval(erase, time);
                setTimeout(() => {
                    clearInterval(timer);
                    setTimeout(changePhrase, 500);
                }, 500);
            }
            setTimeout(goBackwards, 3000);
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
            <div className={theme ? "Main dark": "Main light"}>
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