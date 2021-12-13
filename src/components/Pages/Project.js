import React, { useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import '../../styles/Pages/Project.scss';
import Slider from './Slider';
import GitHub from '../../img/github.svg';
import Internet from '../../img/internet.svg';
import { useParams } from 'react-router-dom';

export default function Project({theme, lang}){
    const [data, setData] = useState([]);
    let {projecttype, projectname} = useParams();
    let accessRoute = `${projecttype}/${projectname}`;
    
    let api = helpHttp();
    let url = lang==="es"?"data/projects.json":"data/projectsEn.json";
    
    useEffect(() =>{
        api.get(url).then((res) => {
            res.forEach(element => {
                if(element["access-point"] === accessRoute){
                    setData(element);
                }
            });
        });

    // eslint-disable-next-line
    }, [lang]);

    return(
        <>
            <div className={theme ? "projectComp dark" : "projectComp light"}>
                <div className="description">
                    <h1>{(data.length !== 0) && data["name"]}</h1>
                    <div className="technologies">{(data.length !== 0) && data["technologies"].map((e)=> <div key={e}><p>{e}<span></span></p></div>)}</div>
                    <div dangerouslySetInnerHTML={{__html: ((data.length !== 0) ? data["description"]: "")}}></div>
                </div>
                {(data.length !== 0) && <Slider sliderImages={data["images"]} theme={theme}/>}
                <div className="checkLinks">
                    <h3>{lang==="es"?"Revisa el proyecto en:":"Check project in:"} </h3>
                    <div className="webLinks">
                        <a href={(data.length !== 0) ? data["webpage"] : "/"} target="_blank" rel="noreferrer">
                            <img src={Internet} alt="Internet"/>
                        </a>
                        <a href={(data.length !== 0) ? data["github-link"] : "/"} target="_blank" rel="noreferrer">
                            <img src={GitHub} alt="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}