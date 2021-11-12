import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({theme}){
    return(
        <> 
            <nav className={theme ? "dark": "light"}>
                <NavLink to="/" className="link">Inicio</NavLink>
                <NavLink to="/projects" className="link dropdown-menu">Proyectos</NavLink>
                <div className="dropdown">
                    <NavLink to="/blog" className="link dropdown-menu">Blog</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/blog/ingenieria" className="link dropdown-menu">Ingeniería</NavLink>
                        <p>Software</p>
                    </div>
                </div>
                <NavLink to="/about" className="link">Acerca de</NavLink>
                <NavLink to="/contact" className="link">Contacto</NavLink>
            </nav>
        </>
    )
}