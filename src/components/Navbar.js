import React from 'react';
import './Navbar.css';
import myImage from '../PaperLeaf logo (leaf only) (1).png'


export function Navbar(){
    return(
        <div className='nav-bar'>
            <div>
                <img src={myImage} className='logo'/>
            </div>
            <div className='nav-options'>
                <button className='nav-button'>Home</button>
                <button className='nav-button'>Help</button>
                <button className='nav-button'>Account</button>
            </div>
        </div>
    )
} 