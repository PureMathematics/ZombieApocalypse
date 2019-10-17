import React from 'react';
import { Page, Card } from 'react-onsenui';

import zombee from '../assets/zombee.jpg';
import gt from '../assets/gt.jpg';
import splashCredits from '../assets/splashCredits.jpg';

function Credits() {
  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashCredits} style={{
          width: '100%',
          height: 'auto',
        }} />
        <div style={{
          position: 'absolute',
          top: '25%',
          color: 'white',
          textAlign: 'center',
          width: '100%',
          textShadow: '0px 0px 5px black',
          lineHeight: '0.5',
        }}>
          <h1 style={{ fontSize: '36pt'}}>Credits</h1>
          <h2 style={{ fontSize: '20pt'}}>Sources & Materials</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <p>Content based on the Zombie Survival Guide by Max Brooks.</p>
        <p>Splash images from Pexels or Unsplash under a Creative Commons Zero license.</p>
        <p>This application makes use of many open source libraries, including React and OnsenUI.</p>
        <p>This application is meant to replicate a mobile phone application as a web application to make development faster. This application is not meant to be viewed on a computer.</p>
      </div>
    </div>
  );
}

export default Credits;
