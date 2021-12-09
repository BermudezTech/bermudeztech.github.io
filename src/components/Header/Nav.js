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
                    <li><NavLink to="/" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Inicio</NavLink></li>
                    <li>
                        <NavLink to="/projects" className="link dropdown-menu" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Proyectos<i className="icon-arrow-down"></i></NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/projects/web-dev" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Desarrollo web<i className="icon-arrow-left"></i></NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to="/projects/frontend" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Frontend</NavLink></li>
                                    <li><NavLink to="/projects/frontend-php" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>PHP y MySQL</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/youtube-channel" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>BermúdezWeb YT</NavLink>
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <NavLink to="/blog" className="link dropdown-menu" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Blog<i className="icon-arrow-down"></i></NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to="/blog/ingenieria" className="link dropdown-menu" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Ingeniería</NavLink></li>
                            <li><NavLink to="/blog/software" className="link dropdown-menu" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Software</NavLink></li>
                        </ul>
                    </li> */}
                    <li className="special"><NavLink to="/about" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Acerca de</NavLink></li>
                    <li><NavLink to="/contact" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Contacto</NavLink></li>
                    <div className="social-btn"><Social theme={theme}/></div>
                </ul>
            </nav>
        </>
    )
}