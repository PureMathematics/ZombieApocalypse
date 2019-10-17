import React from 'react';
import { Page, Card } from 'react-onsenui';

import zombee from '../assets/zombee.jpg';
import gt from '../assets/gt.jpg';
import splashRules from '../assets/splashRules.jpg';

function Rules() {
  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashRules} style={{
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
          <h1 style={{ fontSize: '36pt'}}>Rules</h1>
          <h2 style={{ fontSize: '20pt'}}>How to Stay Alive</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <Card className='dark'>
          <h2>Always Have a Partner or Group</h2>
          <ul>
            <li>Essential for any trip outside of your shelter.</li>
            <li>A group of people is always harder to ambush than an individual.</li>
            <li>Even though it is probably more efficient to split up, the risk of death of at least one person greatly increases.</li>
          </ul>
          <p>
            <strong>DO NOT</strong> ever venture out alone. This will guarantee your death.
          </p>
        </Card>
        <Card className='dark'>
          <h2>The Entire Group Should Work Together</h2>
          <ul>
            <li>A coordinated attack is always better than a solo attack.</li>
            <li>If the "weak" of the group step out of a fight, the group is already significantly more weak.</li>
          </ul>
          <p>
            <strong>DO NOT</strong> ever let someone in your group "be the hero." It will almost always spell out certain death for them.
          </p>
        </Card>
        <Card className='dark'>
          <h2>Never Let Your Guard Down</h2>
          <ul>
            <li>There is always the potential for more attacks to take place, especially after a fight.</li>
            <li>Zombies can be literally anywhere, so always be aware of potential places where they could hide.</li>
            <li>Always make sure you have an escape route in the event you see something suspicious.</li>
          </ul>
          <p>
            <strong>DO NOT</strong> take any time to rest when you are in an unknown location.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Rules;
