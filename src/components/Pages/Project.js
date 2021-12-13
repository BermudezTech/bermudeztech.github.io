import React, { useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import '../../styles/Pages/Project.scss';
import Slider from './Slider';
import GitHub from '../../img/github.svg';
import Internet from '../../img/internet.svg';
import { useParams } from 'react-router-dom';
// import Modal from './Modal';

export default function Project({theme}){
    const [data, setData] = useState([]);
    let {projecttype, projectname} = useParams();
    let accessRoute = `${projecttype}/${projectname}`;
    
    let api = helpHttp();
    let url = "data/projects.json";
    
    useEffect(() =>{
        api.get(url).then((res) => {
            res.forEach(element => {
                if(element["access-point"] === accessRoute){
                    setData(element);
                }
            });
        });

    // eslint-disable-next-line
    }, []);

    return(
        <>
            <div className={theme ? "projectComp dark" : "projectComp light"}>
                {/* <Modal><div style={{backgroundImage: "url(data/img/tvmaze-api/1.png)"}}></div></Modal> */}
                <div className="description">
                    <h1>{(data.length !== 0) && data["name"]}</h1>
                    <div dangerouslySetInnerHTML={{__html: ((data.length !== 0) ? data["description"]: "")}}></div>
                </div>
                {(data.length !== 0) && <Slider sliderImages={data["images"]} theme={theme}/>}
                <div className="checkLinks">
                    <h3>Check project in: </h3>
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