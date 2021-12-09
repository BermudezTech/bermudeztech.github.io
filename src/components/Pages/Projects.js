import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Pages/Projects.scss';

function Project({name, imageUrl}){
    let image = {
        backgroundImage: `url(${imageUrl})`,
    }
    return(
        <>
            <div className="project" style={image}>
                <div><span>{name}</span></div>
            </div>
        </>
    )
}

export default function Projects({theme}){
    return(
        <>
            <div className={theme ? "projects dark":"projects light"}>
                <div className="selector">
                    <NavLink className="selectorLink" to="/projects/frontend">FrontEnd</NavLink>
                    <NavLink className="selectorLink" to="/projects/web-design">Diseño web</NavLink>
                    <NavLink className="selectorLink" to="/projects/frontend-php">PHP + MySQL</NavLink>
                </div>
                <div className={theme ? "projects-box dark":"projects-box light"}>
                    <Project name="Nombre del proyecto" imageUrl="http://loremflickr.com/400/400/dog/?lock=1"/>
                </div>
            </div>
        </>
    )
}