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
                    {(iconActive === 2) && <TechInfo name="JavaScript" 
                    description="A diferencia de HTML y CSS, JavaScript es un lenguaje de programación utilizado en entorno 
                    web para añadir funcionalidad a las páginas. Tiene las características tipicas de cualquier lenguaje de 
                    programación. Aunque es utilizado en un inicio en la web, actualmente también ha sido adaptado a otros 
                    entornos mediante diferentes librerías y frameworks. Mediante este se pueden realizar tanto páginas web, 
                    aplicaciones moviles, aplicaciones de escritorio, programación de microcontroladores, servidores, entre muchos 
                    otros." 
                    experience="Media, 2 años"/>}
                    {(iconActive === 3) && <TechInfo name="PHP" 
                    description="PHP es un lenguaje de programación para web que permite incrustar código HTML en el mismo. Este sin 
                    embargo, trabaja del lado del servidor, es decir desde el backend. Permite entonces la integración con bases 
                    de datos y otras funcionalidades." 
                    experience="Baja, 2 años. Conexión con MySQL exitosa y sistemas seguros."/>}
                    {(iconActive === 4) && <TechInfo name="MySQL" 
                    description="Sistema de gestión de bases de datos que hace uso del sistema de consultas SQL. Es capaz de almacenar 
                    datos en tablas de manera organizada, eficiente y accesible mediante diferentes lenguajes de programación. Permite 
                    distintos tipos de datos para trabajar con los requerimientos de software. Permite crear bases de datos relacionales, 
                    esto quiere decir que los datos de una tabla pueden estar relacionados con los de otra." 
                    experience="Media, 2 años. Conexión con PHP exitosa, bases de datos relacionales."/>}
                    {(iconActive === 5) && <TechInfo name="SASS" 
                    description="Es un preprocesador CSS. Lenguaje de estilos en cascada que permite la integración de algunas funcionalidades 
                    de lenguajes de programación como lo son las variables, funciones, entre otras. Permite que el anidamiento entre 
                    los elementos sea mucho más sencillo. " 
                    experience="Media, 2 años."/>}
                    {(iconActive === 6) && <TechInfo name="Bootstrap" 
                    description="Libreria HTML, CSS y JS para el diseño de sitios web. Es una herramienta bastante utilizada en 
                    el desarrollo web, puesto que incluye componentes que ya se encuentran previamente programados lo cual hace más 
                    sencilla la implementación de un sitio web." 
                    experience="Media, 2 años."/>}
                    {(iconActive === 7) && <TechInfo name="React JS" 
                    description="Biblioteca de JavaScript para la creación de interfaces de usuario en aplicaciones de una sola página 
                    o single page application. Es mantenido por facebook. Permite la construcción de aplicaciones de manera más sencilla, 
                    basada en componentes. Esta base en componentes permite reutilizar elementos del sitio web sin necesidad de volver a 
                    escribir el código del componente sino unicamente cambiando las características. " 
                    experience="Baja, 6 meses."/>}
                    {(iconActive === 8) && <TechInfo name="Git" 
                    description="Software de control de versiones para llevar cambios realizados en una aplicación y poder manejar los 
                    archivos de código de forma más fácil. Además está en integración con GitHub, lo que permite manejar archivos compartidos 
                    con otras personas y de tal manera realizar cambios en los mismos simultaneamente. Luego de esto, git nos ayuda a mezclar 
                    y controlar los cambios que están siendo hechos en la aplicación." 
                    experience="Media, 3 años."/>}
                    {(iconActive === 9) && <TechInfo name="Responsive Web Design" 
                    description="Forma de diseño que permite que la interfaz gráfica de un sitio web, se adapte a los diferentes dispositivos. 
                    Para esto generalmente se usan reglas de CSS para reacomodar los elementos de acuerdo al tamaño de la pantalla." 
                    experience="Media, 4 años."/>}
                    {(iconActive === 10) && <TechInfo name="Photoshop" 
                    description="Herramienta de Adobe para la edición, retoque o creación de ilustraciones o fotografías. Es una herramienta usada 
                    para realizar diseño gráfico. También puede ser utilizada para modelar un sitio web." 
                    experience="Media, 4 años."/>}
                    {(iconActive === 11) && <TechInfo name="Figma" 
                    description="Herramienta online para la creación de gráficos vectoriales o de prototipos de aplicaciones, principalmente para web. 
                    Mediante esta herramienta se modela, esquematiza la interfaz gráfica del sitio web." 
                    experience="Media, 1 año."/>}
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