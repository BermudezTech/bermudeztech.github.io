import React from 'react';
import Mail from '../../img/mail.svg';
import '../../styles/Pages/Contact.scss';

export default function Contact({theme, lang}){
    return (
        <>
            <div className={theme ? "Contact dark": "Contact light"}>
                <h1>{lang === "es"?"CONTÁCTAME":"CONTACT ME"}</h1>
                <div className="container">
                    <div>
                        <form>
                            <input type="text" placeholder={lang === "es"?"Nombre":"Name"}/>
                            <span>&#62;</span>
                            <input type="mail" placeholder={lang === "es"?"Correo electrónico":"E-mail"}/>
                            <span>&#62;</span>
                            <input type="text" placeholder={lang === "es"?"Asunto":"Subject"}/>
                            <span>&#62;</span>
                            <textarea placeholder={lang === "es"?"Mensaje":"Message"}>
                            </textarea>
                            <span className="nextTextarea">&#62;</span>
                            <input type="submit" value={lang === "es"?"Enviar":"Submit"}/>
                        </form>
                    </div>
                    <div className="info">
                        <div>
                            <p>
                            {lang === "es"? 
                            "Estoy interesado en oportunidades freelance. Si requieres algún apoyo en tu proyecto o empezar uno nuevo, puedes contactarme.":
                            "I'm interested in freelance oportunities. If you need help with some project or even create a new one, you can contact me."}                                
                            <br/>
                            <br/>
                            {lang === "es"?
                            "Doy tutorías de materias de ingeniería, si quieres agendar una tutoría, no dudes en contactarme.":
                            "I give tutorials about engineering subjects, if you need to schedule one, please contact me."
                            }
                            </p>
                        </div>
                        <div>
                            <div>
                                <img src={Mail} alt="mail"/>
                            </div>
                            <div>
                                <p>jose@bermudezweb.ga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}