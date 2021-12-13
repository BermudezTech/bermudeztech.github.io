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
function TechInfo({name, description, experience, lang}){
    return(
        <div className="techInfo" style={mountedStyle}>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <p><b>{lang === "es" ? "Experiencia": "Experience"}: </b>{experience}</p>
        </div>
    )
}


export default function Techboard({theme, lang}){
    const [iconActive, setIconActive] = useState(-1);
    return(
        <>
            <div className={(theme ? 'techboard dark' : 'techboard light')}>
                <div className="container">
                    {(iconActive === -1) &&
                    <div className="main" style={mountedStyle}>
                        <h2>{lang === "es" ? "Estas son las tecnologías con las que trabajo:": "These are the technologies which I work with:"}</h2>
                    </div>}
                    {(iconActive === 0) && <TechInfo lang={lang} name="HTML5" 
                    description={lang === "es"?
                    "Lenguaje de marcado de hipertexto para la elaboración de páginas web. Mediante este se define la estructura básica del sitio web incluyendo texto, imagenes, videos, links, entre otros.":
                    "HyperText Markup Languaje for making web pages. Through this one, it's possible to deffine the basic structure of the web site including text, images, videos and other elements."} 
                    experience={lang === "es"? "Alta, 4 años": "High, 4 years"}/>}
                    {(iconActive === 1) && <TechInfo lang={lang} name="CSS3" 
                    description={lang === "es" ? 
                    "Hoja de estilos en cascada. Forma mediante la cual se da estilo al sitio web dandole forma y estructura a este. Mediante este podemos cambiar los colores, posiciones y otras características gráficas de los elementos de un sitio web.":
                    "Cascade Style Sheet. This one is the way to stylize the web site giving shape and structure to it. Through this we can change the colors, positions and other graphical characteristics to the elements of a website."
                    } 
                    experience={lang === "es"? "Alta, 4 años": "High, 4 years"}/>}
                    {(iconActive === 2) && <TechInfo lang={lang} name="JavaScript" 
                    description={lang==="es"?
                    "A diferencia de HTML y CSS, JavaScript es un lenguaje de programación utilizado en entorno web para añadir funcionalidad a las páginas. Tiene las características tipicas de cualquier lenguaje de programación. Aunque es utilizado en un inicio en la web, actualmente también ha sido adaptado a otros entornos mediante diferentes librerías y frameworks. Mediante este se pueden realizar tanto páginas web, aplicaciones moviles, aplicaciones de escritorio, programación de microcontroladores, servidores, entre muchos otros.":
                    "Javascript is a programming languaje used in the web environment to add functionality to the web. It has the used characteristics of any programming languaje. Even if it's used mainly on web, in now our days it has been adapted to other environments through different libraries and frameworks. So you can make webpages, mobile apps, desktop apps, microcontrollers programming, and many others." }
                    experience={lang === "es"? "Media, 2 años": "Medium, 2 years"}/>}
                    {(iconActive === 3) && <TechInfo lang={lang} name="PHP" 
                    description={lang==="es"?
                    "PHP es un lenguaje de programación para web que permite incrustar código HTML en el mismo. Este sin embargo, trabaja del lado del servidor, es decir desde el backend. Permite entonces la integración con bases de datos y otras funcionalidades.":
                    "PHP is a programming languaje for web which allows to include HTML in the same file. This is mainly a backend languaje, works server side. So it allow the integration of databases and other functionalities."}
                    experience={lang==="es"?"Baja, 2 años. Conexión con MySQL exitosa y sistemas seguros.":"Low, 2 years. MySQL conexion with success and safe systems."}/>}
                    {(iconActive === 4) && <TechInfo lang={lang} name="MySQL" 
                    description={lang === "es" ? 
                    "Sistema de gestión de bases de datos que hace uso del sistema de consultas SQL. Es capaz de almacenar datos en tablas de manera organizada, eficiente y accesible mediante diferentes lenguajes de programación. Permite distintos tipos de datos para trabajar con los requerimientos de software. Permite crear bases de datos relacionales, esto quiere decir que los datos de una tabla pueden estar relacionados con los de otra.":
                    "Database management system which make use of the query system SQL. It's capable to store data in tables in an organized, efficient and accessible way from different programming languajes. It allows different type of data to work with the software requirements. It allows to create relational databases, this means than the data of a table could be related with other one."}
                    experience={lang === "es" ?
                    "Media, 2 años. Conexión con PHP exitosa, bases de datos relacionales.":
                    "Medium, 2 years. PHP conexion with success, relational databases"}/>}
                    {(iconActive === 5) && <TechInfo lang={lang} name="SASS" 
                    description={lang==="es"?
                    "Es un preprocesador CSS. Lenguaje de estilos en cascada que permite la integración de algunas funcionalidades de lenguajes de programación como lo son las variables, funciones, entre otras. Permite que el anidamiento entre los elementos sea mucho más sencillo.":
                    "It's a CSS preprocessor. Cascade Style Sheet which allows the integration of some functionalities of programming languajes such as variables, functions, and many others. It allows the nesting between elements making it more easy to work with." }
                    experience={lang==="es"?"Media, 2 años.":"Medium, 2 years"}/>}
                    {(iconActive === 6) && <TechInfo lang={lang} name="Bootstrap" 
                    description={lang==="es"?
                    "Libreria HTML, CSS y JS para el diseño de sitios web. Es una herramienta bastante utilizada en el desarrollo web, puesto que incluye componentes que ya se encuentran previamente programados lo cual hace más sencilla la implementación de un sitio web." :
                    "HTML, CSS and JS library for the web site design. It's a tool very used for the web development, because it includes components programmed previously so it's easy the implementation of a website."}
                    experience={lang==="es"?"Media, 2 años.":"Medium, 2 years"}/>}
                    {(iconActive === 7) && <TechInfo lang={lang} name="React JS" 
                    description={lang==="es"?
                    "Biblioteca de JavaScript para la creación de interfaces de usuario en aplicaciones de una sola página o single page application. Es mantenido por facebook. Permite la construcción de aplicaciones de manera más sencilla, basada en componentes. Esta base en componentes permite reutilizar elementos del sitio web sin necesidad de volver a escribir el código del componente sino unicamente cambiando las características. " :
                    "JavaScript library for the development of user interfaces in a single page application. It's kept by Facebook. It allows the construction of applications in a much easy way based in components. This component base philosophy allows to reuse website elements without having to write the code of the component again, just by changing the characteristics. "}
                    experience={lang==="es"?"Baja, 6 meses.":"Low, 6 months"}/>}
                    {(iconActive === 8) && <TechInfo lang={lang} name="Git" 
                    description={lang==="es"?
                    "Software de control de versiones para llevar cambios realizados en una aplicación y poder manejar los archivos de código de forma más fácil. Además está en integración con GitHub, lo que permite manejar archivos compartidos con otras personas y de tal manera realizar cambios en los mismos simultaneamente. Luego de esto, git nos ayuda a mezclar y controlar los cambios que están siendo hechos en la aplicación." :
                    "Control version software to store changes in the application and manage source codes easier. It's integrated with GitHub, so you can work with other people through shared files and make change simultaneously. Then git help us to merge and control the changes which are being made in the application."}
                    experience={lang==="es"?"Media, 3 años.":"Medium, 3 years"}/>}
                    {(iconActive === 9) && <TechInfo lang={lang} name="Responsive Web Design" 
                    description={lang==="es"?
                    "Forma de diseño que permite que la interfaz gráfica de un sitio web, se adapte a los diferentes dispositivos. Para esto generalmente se usan reglas de CSS para reacomodar los elementos de acuerdo al tamaño de la pantalla." :
                    "Design way to create graphic interfaces of a web site which can be addapted to different devices. For this purpose some CSS rules are used to positioning elements according to the screen size."}
                    experience={lang==="es"?"Media, 4 años.":"Medium, 4 years"}/>}
                    {(iconActive === 10) && <TechInfo lang={lang} name="Photoshop" 
                    description={lang==="es"?
                    "Herramienta de Adobe para la edición, retoque o creación de ilustraciones o fotografías. Es una herramienta usada para realizar diseño gráfico. También puede ser utilizada para modelar un sitio web." :
                    "Adobe tool for edition, retouch and creation of illustration and photography. It's a very used tool for graphical design. Also it can be used to desing the layout of a website."}
                    experience={lang === "es"?"Media, 4 años.":"Medium, 4 years"}/>}
                    {(iconActive === 11) && <TechInfo lang={lang} name="Figma" 
                    description={lang==="es"?
                    "Herramienta online para la creación de gráficos vectoriales o de prototipos de aplicaciones, principalmente para web. Mediante esta herramienta se modela, esquematiza la interfaz gráfica del sitio web.":
                    "Online tool for the vector graphics design and application prototypes, mainly web. Through this tool it can be desingned the layout of a website, and the user graphic interface."}
                    experience={lang==="es"?"Media, 1 año.":"Medium, 1 year"}/>}
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