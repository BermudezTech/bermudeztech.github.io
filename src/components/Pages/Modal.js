import React from 'react';
import '../../styles/Pages/Modal.scss';

export default function Modal({theme, children}){
    return(
        <>
            <div className="modal">
                <div className="modal-content">{children}</div>
                <div className="close-btn">X</div>
            </div>
        </>
    )
}