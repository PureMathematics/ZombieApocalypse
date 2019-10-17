import React from 'react';
import { Page, Card, Icon } from 'react-onsenui';
import splashCombat from '../assets/splashCombat.jpg';

function Combat() {
  const [necessaryToolsOpen, changeNecessaryToolsOpen] = React.useState(false);
  const [optionalToolsOpen, changeOptionalToolsOpen] = React.useState(false);
  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashCombat} style={{
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
          <h1 style={{ fontSize: '36pt'}}>Combat</h1>
          <h2 style={{ fontSize: '20pt'}}>Strategies For Fighting</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <p>
          It is important that you have the necessary tools to get you out of most situations. We provide a list of basic tools and strategies that you will need that will prove to be helpful in a zombie encounter. While this is not an exhaustive list, these tools will provide assistance in the vast majority of encounters here at Georgia Tech.
        </p>
        <Card className='dark'>
          <h2>Disable</h2>
          <p>
          	The zombies cannot be fully terminated unless you use a very specific method. Do not aim to kill the zombie; aim to <strong>DISABLE</strong> it.
          </p>
        </Card>
        <Card className='dark'>
          <h2>Aim for Joints</h2>
          <p>
          	Zombies have the same nervous system and bone structure as humans. Rendering them immobile by hitting their <strong>KNEES, ELBOWS, or SPINE</strong> is a good idea.
          </p>
          <ul>
            <li>Aiming at the knees is the best option, as it is easy to reach, and can hinder zombie movement the most.</li>
            <li>Aiming at the arms is useful when you are in a close quarters situation where you do not want to be caught, or you have high ground and can't reach the knees.</li>
            <li>Only aim for the spine if you are confident that your strength is enough to break a spine. Even so, getting behind a zombie's back may be hard and not worth.</li>
          </ul>
        </Card>
        <Card className='dark'>
          <h2>Attempt Termination at Your Own Risk</h2>
          <p>
          	Termination of these zombies is immensely difficult it requires:
          </p>
          <ul>
            <li>Multiple Georgia Tech students</li>
            <li>All present students' knowledge of the entire Ramblin' Wreck song</li>
            <li>Enough time and space to perform the entire song</li>
          </ul>
          <p>
          	If all these conditions are fulfilled, attempt termination by singing the Ramblin' Wreck song live to the zombies. This could be fruitful if successful, as the process can terminate all zombies within hearing range.
          </p>
        </Card>
      </div>
    </div>
    //   <Card>
    //   <h1>Overview</h1>
    //   </Card>
    //   <Card>
    //     <p>It is important that you have the necessary tools to get you out of most situations. We provide a list of basic tools and strategies that you will need that will prove to be helpful in a zombie encounter. While this is not an exhaustive list, these tools will provide assistance in the vast majority of encounters here at Georgia Tech.</p>
    //   </Card>
    //   <Card onClick={() => changeNecessaryToolsOpen(!necessaryToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
    //   <Icon size={{default: 32}} icon={{default: `md-caret-${necessaryToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Tools & Usage</h1>
    //   </Card>
    //   {necessaryToolsOpen
    //     ? <><Card>
    //         <h2>Baseball Bat</h2>
    //         <p>
    //           Excels at breaking bones. Going for the leg is a good option as this permanently disables the zombie from walking, either temporarily or permanently, so going for the leg is a good investment for preventing threats in future survivals.
    //         </p>
    //       </Card>
    //       <Card>
    //         <h2>Crowbar</h2>
    //         <p>
    //           Weapons like crowbar are always preferable due to their multiple usages in Zombie survival. Due to its weight, it can be effective towards the head and chest areas. It can also be useful in getting out of situations.
    //         </p>
    //       </Card>
    //       <Card>
    //         <h2>Sharp Knife</h2>
    //         <p>
    //           is not suited for breaking bones. Sharp weapons are at a disadvantage. Quickly stab the eye of the zombie to impair its vision, or aim for the rest of the face as it is the most sensitive area for zombies.
    //         </p>
    //       </Card>
    //       <Card>
    //         <h2>Ranged Weapon</h2>
    //         <p>
    //           Is very dependant on wielder’s aim. Aim a zombie’s brain to destroy a critical movement function. If the zombie gets too close, using melee weapons can be more effective. If zombies do not see you at a long range, do not attack them with your ranged weapon and attract attention.
    //         </p>
    //       </Card></>
    //     : null}
    // </Page>
  )
}

export default Combat;
