import React from 'react';
import '../../styles/Pages/About.scss';
import logo from '../../img/logo2.png';
import Techboard from './Techboard';

function TimeLineItem({date, title, place}){
    return(
        <>
            <div className="timelineitem">
                <h3>{date}</h3>
                <div className="bar">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div>
                    <h3>{title}</h3>
                    {(place !== "") && <h4>{place}</h4>}
                </div>
            </div>
        </>
    )
}

function TimeLine({lang}){
    return(
        <>
            <div className="timeline">
                <TimeLineItem date="2019" title={lang==="es"?"Técnico en programación de Software":"Software programming technician"} place="SENA, Colombia"/>
                <TimeLineItem date={lang==="es"?"Actualidad":"Nowadays"} title={lang==="es"?"Formación autodidacta":"Self-taught training"} place=""/>
            </div>
        </>
    )
}

export default function About({theme, lang}){
    return (
        <>
            <div className={theme ? "About dark" : "About light"}>
                <h1>{lang === "es" ? "Quien soy?":"Who am I?"}</h1>
                <div className="with-photo">
                    <div><img src={logo} alt="logo-img"/></div>
                    <div>
                        <p>
                            {lang === "es" ? 
                            "Hola. Mi nombre es José Bermúdez, soy programador de software enfocado en el desarrollo web frontend. Desarrollo páginas web funcionales, modernas, bonitas y fáciles de usar. Tengo 3 años de experiencia trabajando con proyectos frontend y un poco de backend.":
                            "Hi. My name is José Bermúdez, I'm software developer mainly frontend web developer. I develop functional, modern, beautiful and easy to use webpages. I have 3 experience years working with some projects of frontend and a little of backend."
                            }
                        </p>
                        <p>
                            {lang === "es" ?
                            "Trabajo en la creación de soluciones a problemas de la vida cotidiana que puedan ser solucionados mediante software, especialmente mediante la web. Me interesan este tipo de problemas puesto que me ponen un reto como desarrollador resultando en una solución efectiva.":
                            "I work in the creation of solutions to cotidian life problems which can be solved through software, specially through web. I'm interested in this type of projects because they are a challenge for me as a developer, leading to an effective solution."
                            }
                        </p>
                    </div>
                </div>
                <p>
                    {lang === "es" ?
                    "Mi experiencia principal es en el desarrollo frontend y programación en general. Sin embargo, también me apasiona la creación de diseños y contenidos digitales (edición y creación de video, imagenes, audio). Tengo también experiencia en Backend especificamente en proyectos con PHP y MySQL.":
                    "My main experience is with frontend development and programmation in general. But also, I like the creation of design and multimedia content (video edition, image creation and edition and also audio). I have also some experience with Backend, specifically with PHP and MySQL projects."
                    }
                </p>
                <p>
                    {lang === "es"?
                    "También me interesa la enseñanza; es importante que la educación se actualice y adapte al siglo XXI, donde podemos usar nuevas tecnologías y metodologías para realizar una educación efectiva.":
                    "I'm also interested in teaching. It's important for the education to be updated and adapted to the 21st century, when we can find new technologies and metodologies to teach effectively."
                    }
                </p>
                <h2>{lang === "es" ? "Tecnologías": "Technologies"}</h2>
                <Techboard theme={theme} lang={lang}/>
                <h2>{lang==="es"?"Ingeniería":"Engineering"}</h2>
                <p>
                    {lang==="es"?
                    "Actualmenxte soy estudiante de ingeniería mecatrónica, me apasiona la tecnología y quiero conocer más de cerca el funcionamiento de las cosas. Mediante esta ingeniería puedo reforzar conocimientos en matemáticas y física como adentrarme en el mundo de la electrónica y la programación.":
                    "Nowadays I'm mecathronics engineer student. I love technology and I want to know about how things work. Through this engineering I can improve in knowledge as maths, physics and get inside the electronic and programming world."}
                </p>
                <h2>Educación</h2>
                <TimeLine lang={lang}/>
            </div>
        </> 
    )
}