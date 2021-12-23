import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import { NavLink, useParams } from 'react-router-dom';
import '../../styles/Pages/Projects.scss';

function Project({name, imageUrl, tech}){
    let image = {
        backgroundImage: `url(${imageUrl})`,
    }
    return(
        <>
            <div className="project">
                <div style={image} className="project-img"></div>
                <div className="project-text">
                    <span className="title">{name}</span>
                    <div className="technologies">
                        {tech.map(element => 
                            <p key={element}>{element}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Projects({theme, lang}){
    let [data, setData] = useState([]);
    let { type } = useParams();
    
    let api = helpHttp();
    let url = lang==="es" ? "data/projects.json":"data/projectsEn.json";

    useEffect(() =>{
        api.get(url).then((res) => {
            let newData = [];
            res.forEach(element => {
                let projecttype = element["access-point"].split("/")[0];
                let newElement = [element];
                if((type === projecttype) || (type === undefined)){
                    newData = [...newData, ...newElement];
                }
            });
            setData(newData);
        });
    // eslint-disable-next-line
    }, [type, lang]);
    return(
        <>
            <div className={theme ? "projects dark":"projects light"}>
                <div className="selector">
                    <NavLink className="selectorLink" to="/projects/frontend">FrontEnd</NavLink>
                    <NavLink className="selectorLink" to="/projects/web-design">{lang==="es"?"Diseño web":"Web design"}</NavLink>
                    <NavLink className="selectorLink" to="/projects/frontend-php">PHP + MySQL</NavLink>
                </div>
                <div className={theme ? "projects-box dark":"projects-box light"}>
                    {data.map(element =>
                    <NavLink to={`/projects/${element["access-point"]}`} key={element["access-point"]}>
                        <Project name={element["name"]} imageUrl={element["images"][0]["imgUrl"]} tech={element["technologies"]}/>
                    </NavLink>
                    )}
                </div>
            </div>
        </>
    )
}