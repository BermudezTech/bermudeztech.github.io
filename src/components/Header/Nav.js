import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({theme}){
    return(
        <> 
            <nav className={theme ? "dark": "light"}>
                <NavLink to="/" className="link">Inicio</NavLink>
                <NavLink to="/contact" className="link">Contacto</NavLink>
            </nav>
        </>
    )
}