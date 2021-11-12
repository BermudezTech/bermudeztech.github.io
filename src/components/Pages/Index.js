import React from 'react';
import { Route, Routes } from 'react-router';
//import Maintenance from './Maintenance';
import Main from './Main';
import Contact from './Contact';
import Error404 from './Error404';

export default function Index({theme}){
    return(
        <>
            {/*<Maintenance theme={theme}/>*/}
            <Routes>
                <Route exact path="/" element={<Main theme={theme}/>} />
                <Route exact path="contact"element={<Contact theme={theme}/>}/>
                <Route exact path="*"element={<Error404 theme={theme}/>}/>
            </Routes>
        </>
    )
}