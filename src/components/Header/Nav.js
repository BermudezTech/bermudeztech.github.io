import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuBtn from '../../img/three-bars.svg';
import closeBtn from '../../img/icon-close.svg';
import Social from './Social';

export default function Nav({theme, lang}){
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
                    <li><NavLink to="/" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>{(lang === "es") ? "Inicio":"Home"}</NavLink></li>
                    <li>
                        <NavLink to="/projects/web-dev" className="link dropdown-menu" onClick={() => {setActive(false); window.scrollTo(0,0)}}>{(lang === "es") ? "Proyectos":"Projects"}<i className="icon-arrow-down"></i></NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/projects/web-dev" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>{(lang === "es") ? "Desarrollo web":"Web development"}<i className="icon-arrow-left"></i></NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to="/projects/frontend" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>Frontend</NavLink></li>
                                    <li><NavLink to="/projects/frontend-php" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>PHP {(lang === "es") ? "y":"and"} MySQL</NavLink></li>
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
                    <li className="special"><NavLink to="/about" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>{(lang === "es") ? "Acerca de":"About"}</NavLink></li>
                    <li><NavLink to="/contact" className="link" onClick={() => {setActive(false); window.scrollTo(0,0)}}>{(lang === "es") ? "Contacto":"Contact"}</NavLink></li>
                    <div className="social-btn"><Social theme={theme}/></div>
                </ul>
            </nav>
        </>
    )
}