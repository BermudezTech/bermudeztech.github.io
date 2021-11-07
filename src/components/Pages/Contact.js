import React from 'react';
import Mail from '../../img/mail.svg';
import '../../styles/Pages/Contact.scss';

export default function Contact({theme}){
    return (
        <>
            <div className={theme ? "Contact dark": "Contact light"}>
                <h1>CONTÁCTAME</h1>
                <div className="container">
                    <div>
                        <form>
                            <input type="text" placeholder="Nombre" />
                            <span>&#62;</span>
                            <input type="mail" placeholder="Correo electrónico" />
                            <span>&#62;</span>
                            <input type="text" placeholder="Asunto"/>
                            <span>&#62;</span>
                            <textarea placeholder="Mensaje">
                            </textarea>
                            <span className="nextTextarea">&#62;</span>
                            <input type="submit"/>
                        </form>
                    </div>
                    <div className="info">
                        <div>
                            <p>Estoy interesado en oportunidades freelance. Si requieres algún apoyo en tu
                                proyecto o empezar uno nuevo, puedes contactarme.
                            <br/>
                            <br/>
                                Doy tutorías de materias de ingeniería, si quieres agendar una tutoría, no dudes
                                en contactarme.
                            <br/>
                            <br/>
                                Cualquier pregunta, sugerencia u oportunidad es bienvenida.
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