import React from 'react';
import { Page, Card } from 'react-onsenui';

import zombee from '../assets/zombee.jpg';
import gt from '../assets/gt.jpg';
import splashHome from '../assets/splashHome.jpg';

function Home() {
  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashHome} style={{
          width: '100%',
          height: 'auto',
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          color: 'white',
          textAlign: 'center',
          width: '100%',
          textShadow: '0px 0px 5px black',
          lineHeight: '0.5',
        }}>
          <h1 style={{ fontSize: '36pt'}}>Georgia Tech</h1>
          <h2 style={{ fontSize: '20pt'}}>Zombie Apocalypse Guide</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <p>
          You are a Georgia Tech student trying to not have a mental breakdown due to your course overload. While you are praying to our lord George P. Burdell to not lose HOPE(sic), you hear muffled growling and piercing screams outside. You look out and see a chaotic frenzy of students running about, and some disfigured humanoid creature staggering after them. Since you’re not a u(sic)GA student, you quickly realize you’re in a zombie apocalypse, which requires you to drop everything you’ve been doing and focus on one thing: survival.
        </p>
        <p>
          This app is for people like you, a student at Georgia Tech stuck in the school, where a lab experiment gone wrong created a world-ending outbreak . In this guide, you will find information on the zombies themselves, what equipment you will need, safe zones on campus, and combat strategies when you are faced with the need to fight zombies. Happy surviving!
        </p>
        <p>
          This app was designed to be in dark mode to avoid drawing unnecessary attention while you use this app. The dark pages will also save battery on certain devices.
        </p>
      </div>
    </div>
  );
}

export default Home;
