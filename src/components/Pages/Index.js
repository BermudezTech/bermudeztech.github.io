import React from 'react';
//import Maintenance from './Maintenance';
import Main from './Main';

export default function Index({theme}){
    return(
        <>
            {/*<Maintenance />*/}
            <Main theme={theme}/>
        </>
    )
}