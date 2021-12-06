import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuBtn from '../../img/three-bars.svg';
import closeBtn from '../../img/icon-close.svg';
import Social from './Social';

export default function Nav({theme}){
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!active);
    }
    return(
        <> 
            <nav className={theme ? (active ? "dark active": "dark"): (active ? "light active":"light")}>
                <div className="menu-icons" onClick={()=>{toggleActive()}}>
                    <i className="icon-menu"><img src={menuBtn} alt="menu-btn"/></i>
                    <i className="icon-close"><img src={closeBtn} alt="close-btn"/></i>
                </div>
                <ul className="nav-list">
                    <li><NavLink to="/" className="link">Inicio</NavLink></li>
                    <li>
                        <NavLink to="/projects" className="link dropdown-menu">Proyectos<i className="icon-arrow-down"></i></NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/projects/web-dev" className="link">Desarrollo web<i className="icon-arrow-left"></i></NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to="/projects/frontend" className="link">Frontend</NavLink></li>
                                    <li><NavLink to="/projects/frontend-php" className="link">PHP y MySQL</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/youtube-channel" className="link">BermúdezWeb YT</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/blog" className="link dropdown-menu">Blog<i className="icon-arrow-down"></i></NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to="/blog/ingenieria" className="link dropdown-menu">Ingeniería</NavLink></li>
                            <li><NavLink to="/blog/software" className="link dropdown-menu">Software</NavLink></li>
                        </ul>
                    </li>
                    <li className="special"><NavLink to="/about" className="link">Acerca de</NavLink></li>
                    <li><NavLink to="/contact" className="link">Contacto</NavLink></li>
                    <div className="social-btn"><Social theme={theme}/></div>
                </ul>
            </nav>
        </>
    )
}