import { useState } from 'react';
import React from 'react';
import { Navbar } from './components/Navbar';
import { InfoBox } from './components/profileInfoBox';
import './App.css';

export default function webPage(){
  return(
  <div>
    <div>
      <Navbar className='nav-bar'/>
    </div>
    <div className='item-box'>
      <InfoBox />
    </div>
  </div>
  );
}