import React from 'react';
import { Route, Routes } from 'react-router';
//import Maintenance from './Maintenance';
import Main from './Main';
import Contact from './Contact';

export default function Index({theme}){
    return(
        <>
            {/*<Maintenance />*/}
            <Routes>
                <Route exact path="/" element={<Main theme={theme}/>} />
                <Route exact path="contact"element={<Contact theme={theme}/>}/>
            </Routes>
        </>
    )
}