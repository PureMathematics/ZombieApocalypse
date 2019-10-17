import React from 'react';
import { Page, Card } from 'react-onsenui';
import splashZombies from '../assets/splashZombies.jpg';

function Zombies() {
  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashZombies} style={{
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
          <h1 style={{ fontSize: '36pt'}}>Zombies</h1>
          <h2 style={{ fontSize: '20pt'}}>Everything About the Enemy</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <Card className='dark'>
          <h1>Zombie Biology</h1>
          <p>In every way, zombie bodies are just like human bodies; however, there are some key differences.</p>
          <ul>
            <li>They lack a central nervous system, so they do not feel pain.</li>
            <li>They seem to only exhibit basic motor controls</li>
            <li>They have very little hand-eye coordination</li>
          </ul>

        </Card>
        <Card className='dark'>
          <h1>Zombie Movement</h1>
          <p>Zombies are not known for their speed. This holds true in this apocalypse.</p>
          <ul>
            <li>They tend to move at a slouch or limp.</li>
            <li>The fastest observed zombie moved at a rate of 1 step every 1.5 seconds.</li>
            <li>They do not easily get tired and rely on their prey getting tired.</li>
            <li>They have never been observed jumping up and down or across to another location.</li>
            <li>They do not swim but rather walk in water.</li>
          </ul>
        </Card>
        <Card className='dark'>
          <h1>Zombie Senses</h1>
          <p>Zombies have certain improved senses. Pay close attention to how you move around your environment.</p>
          <ul>
            <li>Eyesight is similar to a normal human, meaning they can spot prey at distances comparable to a human.</li>
            <li><strong>DO NOT</strong> mimic their limping motions in an attempt to confuse them. <strong>THIS WILL FAIL</strong>.</li>
            <li>They have excellent hearing, meaning they can detect the quietest sounds and determine the direction instantly.</li>
          </ul>
        </Card>
        <Card className='dark'>
          <h1>Zombie Termination</h1>
          <p>The only true way to permanently terminate a zombie is to have a group of GT students sing <strong>Ramblin' Wreck</strong> for the full length of the song. This should be used sparingly in the case a cure is found and can convert zombies back to humans.</p>
        </Card>
      </div>
    </div>
  )
}

export default Zombies;
