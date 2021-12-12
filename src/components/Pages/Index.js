import React from 'react';
import { Route, Routes } from 'react-router';
//import Maintenance from './Maintenance';
import Main from './Main';
import Contact from './Contact';
import Error404 from './Error404';
import About from './About';
import Projects from './Projects';
import Project from './Project';

export default function Index({theme}){
    return(
        <>
            {/*<Maintenance theme={theme}/>*/}
            <Routes>
                <Route exact path="/" element={<Main theme={theme}/>} />
                <Route exact path="contact"element={<Contact theme={theme}/>}/>
                <Route exact path="*"element={<Error404 theme={theme}/>}/>
                <Route exact path="/about" element={<About theme={theme}/>} />
                <Route path="/projects/:type" element={<Projects theme={theme}/>} />
                <Route path="/projects/:projecttype/:projectname" element={<Project theme={theme}/>} />
            </Routes>
        </>
    )
}