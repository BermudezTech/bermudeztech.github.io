import React from 'react';
import '../../styles/Maintenance.scss';

export default function Maintenance({theme}){
    return(
        <>
            <div className={theme ? "maintenance dark": "maintenance light"}>
                <p className="alertM">⚠️</p>
                <p className="alertM">Esta web se encuentra en mantenimiento</p>
            </div>
        </>
    )
}