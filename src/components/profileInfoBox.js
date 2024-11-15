import React from 'react';
import './profileInfoBox.css'
import { Link } from 'react-router-dom';


export function InfoBox() {
    return(
        <div className='info-box'>
            <h1 className='intro-text'>Let's get started.</h1>
            <div className = 'topRow'>
                <form action="App.js" method="GET">
                    <input className='halfBubble' type="text" name = "First Name" placeholder='First Name' />
                    <input className='halfBubble' type="text" name = "Last Name" placeholder='Last Name' />
                </form>
            </div>
            <div className='lowerRows'>
                <form action="App.js" method="GET">
                    <input className='fullBubble' type="text" name = "Email" placeholder='Email' />
                </form>
            </div>
            <div className='lowerRows'>
                <form action="App.js" method="GET">
                    <input className='fullBubble' type="text" name = "Password" placeholder='Password' />
                </form>
            </div>
            <div className='lowerRows'>
                <form action="App.js" method="GET">
                    <input className='fullBubble' type="text" name = "Confirm Password" placeholder='Confirm Password' />
                </form>
            </div>
            <div className='pageRedirects'>
                <text className='logInRedirect'>Already have an account?</text>
                <button className='submit'>Sign Up</button>
            </div>
        </div>
    );
}

 