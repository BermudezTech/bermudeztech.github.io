import React from 'react';
import '../../styles/Pages/Project.scss';
import Slider from './Slider';
import GitHub from '../../img/github.svg';
import Internet from '../../img/internet.svg';

export default function Project({theme}){
    const sliderImages = [
        {projectName:"Mi primer proyecto", imgUrl:"http://loremflickr.com/400/400/dog/?lock=1"},
        {projectName:"Mi segundo proyecto", imgUrl:"http://loremflickr.com/400/400/dog/?lock=2"},
        {projectName:"Mi tercer proyecto", imgUrl:"http://loremflickr.com/400/400/dog/?lock=3"},
        {projectName:"Mi cuarto proyecto", imgUrl:"http://loremflickr.com/400/400/dog/?lock=4"}];
    return(
        <>
            <div className={theme ? "projectComp dark" : "projectComp light"}>
                <div className="description">
                    <h1>TVMaze API</h1>
                    <p>
                        This project contains a React JS user interface making use of the TVMaze rest API. 
                        This project was developed through my learning process of React JS and it's my first 
                        usable app with this JavaScript framework. You can search for shows stored in the 
                        TVMaze API.
                    </p>
                    <h2>How it works?</h2>
                    <p>
                        You just have to look for a show which is available in TVMaze, then you select by clicking 
                        the show you want to know more about. All the information related to the shows come from 
                        the TVMaze API and also you can add some comments to each show. This comments are stored 
                        in a personal database and get loaded to the page using a custom API made with PHP. All 
                        of this is possible thanks to the asynchronous property of JS (AJAX and Fetch API) and by 
                        a custom hook in React (useFetch).
                    </p>
                    <h2>Learned Skills</h2>
                    <ul>
                        <li>Learned Skills</li>
                        <li>Class components and functional components</li>
                        <li>Hooks (useState, useEffect and custom hooks)</li>
                        <li>SASS with React JS</li>
                        <li>CSS animations</li>
                        <li>Advanced skills of JS (operators, arrow functions, destructuring, ...)</li>
                        <li>Making of a API with PHP and CORS policy</li>
                        <li>Pass data and events through components</li> 
                        <li>Deploy of React app to Github pages</li>
                    </ul>
                </div>
                <Slider sliderImages={sliderImages} theme={theme}/>
                <div className="checkLinks">
                    <h3>Check project in: </h3>
                    <div className="webLinks">
                        <a href="https://www.youtube.com/channel/UCA_hRDpRJLkSRDA62xKNFaQ" target="_blank" rel="noreferrer">
                            <img src={Internet} alt="Internet"/>
                        </a>
                        <a href="https://github.com/JBermudezG" target="_blank" rel="noreferrer">
                            <img src={GitHub} alt="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}