import React from 'react';
import '../../styles/Pages/About.scss';
import logo from '../../img/logo2.png';
import Techboard from './Techboard';

export default function About({theme}){
    return (
        <>
            <div className={theme ? "About dark" : "About light"}>
                <h1>Quien Soy?</h1>
                <div className="with-photo">
                    <div><img src={logo} alt="logo-img"/></div>
                    <div>
                        <p>
                            Hola. Mi nombre es José Bermúdez, soy programador de software enfocado en el desarrollo web frontend. 
                            Desarrollo páginas web funcionales, modernas, bonitas y fáciles de usar. Tengo 3 años de experiencia 
                            trabajando con proyectos frontend y backend.
                        </p>
                        <p>
                            Trabajo en la creación de soluciones a problemas de la vida cotidiana que puedan ser solucionados 
                            mediante software, especialmente mediante la web. Me interesan este tipo de problemas puesto que me 
                            ponen un reto como desarrollador resultando en una solución efectiva.
                        </p>
                    </div>
                </div>
                <p>
                    Mi experiencia principal es en el desarrollo frontend y programación en general. Sin embargo, también me 
                    apasiona la creación de diseños y contenidos digitales (edición y creación de video, imagenes, audio). 
                    Tengo también experiencia en Backend especificamente en proyectos con PHP y MySQL.
                </p>
                <p>
                    También me interesa la enseñanza; es importante que la educación se actualice y adapte al siglo XXI, 
                    donde podemos usar nuevas tecnologías y metodologías para realizar una educación efectiva.
                </p>
                <h2>Tecnologías</h2>
                <Techboard theme={theme}/>
                <h2>Ingeniería</h2>
                <p>
                    Actualmente soy estudiante de ingeniería mecatrónica, me apasiona la tecnología y quiero conocer más de 
                    cerca el funcionamiento de las cosas. Mediante esta ingeniería puedo reforzar conocimientos en matemáticas 
                    y física como adentrarme en el mundo de la electrónica y la programación.
                </p>
                <h2>Educación</h2>
            </div>
        </> 
    )
}