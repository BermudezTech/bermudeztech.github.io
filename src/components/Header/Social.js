import React from 'react';
import YouTube from '../../img/youtube.svg';
import GitHub from '../../img/github.svg';

export default function Social({theme}){
    let socialColor = {
        filter: theme ? 'invert(1)' : 'invert(0)',
    }
    return (
        <>
            <div className="rightHeader">
                <div className={theme ? "lang dark": "lang light"}>
                    <select>
                        <option>ES</option>
                        <option>EN</option>
                    </select>
                </div>
                <div className={theme ? "Social dark": "Social light"}>
                    <img src={YouTube} alt="YouTube" style={socialColor}/>
                    <img src={GitHub} alt="GitHub" style={socialColor}/>
                </div>
            </div>
        </>
    )
}