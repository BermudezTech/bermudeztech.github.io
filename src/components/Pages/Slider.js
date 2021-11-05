import React, {useState, useEffect} from 'react';

export default function Slider(){
    let [projectName, setProjectName] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    let [contador, setContador] = useState(0);
    const sliderImages = [
        {projectName:"Mi primer proyecto", imgUrl:"http://lorempixel.com/400/400/nature/1"},
        {projectName:"Mi segundo proyecto", imgUrl:"http://lorempixel.com/400/400/nature/2"},
        {projectName:"Mi tercer proyecto", imgUrl:"http://lorempixel.com/400/400/nature/3"}];

    let changeSlide = (goBack) => {
        let projectsNum = sliderImages.length;
        let provisional;
        if(goBack) provisional = contador - 1;
        else provisional = contador + 1;
        
        if(provisional === projectsNum) setContador(0);
        else if(provisional === -1) setContador(projectsNum - 1);
        else setContador(provisional);
    }
    
    useEffect(()=>{
        setProjectName(sliderImages[contador].projectName);
        setImgUrl(sliderImages[contador].imgUrl);

        let temporizador = setTimeout(changeSlide, 5000);
        return () => clearTimeout(temporizador);

        // eslint-disable-next-line
    }, [contador]);

    let sliderImage = {
        backgroundImage: `url(${imgUrl})`,
    }
    return(
        <>
            <div className="Slider" style={sliderImage}>
                <div></div>
                <div className="buttons">
                    <span onClick={()=>changeSlide(true)}>&#60;</span>
                    <span onClick={()=>changeSlide(false)}>&#62;</span>
                </div>
                <p>{projectName}</p>
            </div>
        </>
    )
}