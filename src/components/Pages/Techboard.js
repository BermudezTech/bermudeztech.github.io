import React, { useState } from 'react';
import '../../styles/Pages/Techboard.scss';
import htmlfive from '../../img/tech-logos/html-five.svg';
import css3 from '../../img/tech-logos/css3.svg';
import javascript from '../../img/tech-logos/javascript.svg';
import php from '../../img/tech-logos/php.svg';
import mysql from '../../img/tech-logos/mysql.svg';
import sass from '../../img/tech-logos/sass.svg';
import bootstrap from '../../img/tech-logos/bootstrap.svg';
import react from '../../img/tech-logos/react.svg';
import git from '../../img/tech-logos/git.svg';
import responsive from '../../img/tech-logos/responsive.svg';
import photoshop from '../../img/tech-logos/photoshop.svg';
import figma from '../../img/tech-logos/figma.svg';

function TechIcon({name, number, setter}){
    const icons = [htmlfive, css3, javascript, php, mysql, sass, bootstrap, react, git, responsive, photoshop, figma];
    return(
        <img src={icons[number]} 
        alt={name} 
        onMouseOver={setter.bind(this, number)} 
        onMouseLeave={setter.bind(this, -1)}
        onClick={setter.bind(this, number)}/>
    )
}

const mountedStyle = {
    animation: "inAnimation 500ms ease-in"
};
function TechInfo({name, description, experience}){
    return(
        <div className="techInfo" style={mountedStyle}>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <p><b>Experiencia: </b>{experience}</p>
        </div>
    )
}


export default function Techboard({theme}){
    const [iconActive, setIconActive] = useState(-1);
    return(
        <>
            <div className={(theme ? 'techboard dark' : 'techboard light')}>
                <div className="container">
                    {(iconActive === -1) &&
                    <div className="main" style={mountedStyle}>
                        <h2>Estas son las tecnologías con las que trabajo:</h2>
                    </div>}
                    {(iconActive === 0) && <TechInfo name="HTML5" 
                    description="Lenguaje de marcado de hipertexto para la elaboración de páginas web. Mediante este se 
                    define la estructura básica del sitio web incluyendo texto, imagenes, videos, links, entre otros." 
                    experience="Alta, 4 años"/>}
                    {(iconActive === 1) && <TechInfo name="CSS3" 
                    description="Hoja de estilos en cascada. Forma mediante la cual se da estilo al sitio web dandole 
                    forma y estructura a este. Mediante este podemos cambiar los colores, posiciones y otras características 
                    gráficas de los elementos de un sitio web." 
                    experience="Alta, 4 años"/>}
                </div>
                <div className="techicons">
                    <TechIcon name="htmlfive" number={0} setter={setIconActive}/>
                    <TechIcon name="css3" number={1} setter={setIconActive}/>
                    <TechIcon name="javascript" number={2} setter={setIconActive}/>
                    <TechIcon name="php" number={3} setter={setIconActive}/>
                    <TechIcon name="mysql" number={4} setter={setIconActive}/>
                    <TechIcon name="sass" number={5} setter={setIconActive}/>
                    <TechIcon name="bootstrap" number={6} setter={setIconActive}/>
                    <TechIcon name="react" number={7} setter={setIconActive}/>
                    <TechIcon name="git" number={8} setter={setIconActive}/>
                    <TechIcon name="responsive" number={9} setter={setIconActive}/>
                    <TechIcon name="photoshop" number={10} setter={setIconActive}/>
                    <TechIcon name="figma" number={11} setter={setIconActive}/>
                </div>
            </div>
        </>
    );
}