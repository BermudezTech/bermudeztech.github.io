import React from 'react';
import '../../styles/Maintenance.scss';

export default function Error404({theme, lang}){
    return(
        <>
            <div className={theme ? "maintenance dark": "maintenance light"}>
                <p className="alertM">⚠️</p>
                <p className="alertM">{lang==="es"?"Error 404: Ruta no encontrada": "Error 404: Nothing was found here!"}</p>
            </div>
        </>
    )
}