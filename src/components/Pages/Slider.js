import React, {useState} from 'react';

export default function Slider(){
    let [projectName, setProjectName] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    let [contador, setContador] = useState(0);
    let sliderImages = [
        {projectName:"My first project", imgUrl:"http://lorempixel.com/400/400/nature/1"},
        {projectName:"My second project", imgUrl:"http://lorempixel.com/400/400/nature/2"},
        {projectName:"My third project", imgUrl:"http://lorempixel.com/400/400/nature/3"}];
    let changeSlide = (goBack) => {
        if(contador < sliderImages.length){
            setProjectName(sliderImages[contador].projectName);
            setImgUrl(sliderImages[contador].imgUrl);
            if(goBack && contador > 0){
                setContador(contador-1);
            }else if(goBack && contador === 0){
                setContador(sliderImages.length - 1);
            }else if(contador+1 === sliderImages.length){
                setContador(0);
            }else{
                setContador(contador+1);
            }
        }else{
            setContador(0);
        }
        console.log(contador);
        //clearTimeout();
    }
    //setTimeout(changeSlide, 5000);
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