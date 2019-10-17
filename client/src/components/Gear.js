import React from 'react';
import { Page, Card, Icon } from 'react-onsenui';
import waterbottle from '../assets/waterbottle.png';
import backpack from '../assets/backpack.jpg';
import cards from '../assets/cards.png';
import bat from '../assets/weapon.png';
import shotgun from '../assets/shotgun.jpg';
import crowbar from '../assets/crowbar.jpg';
import knife from '../assets/knife.jpg';
import splashGear from '../assets/splashGear.jpg';

function Gear() {
  const [necessaryToolsOpen, changeNecessaryToolsOpen] = React.useState(false);
  const [optionalToolsOpen, changeOptionalToolsOpen] = React.useState(false);
  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashGear} style={{
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
          <h1 style={{ fontSize: '36pt'}}>Gear</h1>
          <h2 style={{ fontSize: '20pt'}}>Useful Stuff To Bring</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <p>
          Many zombie guides recommend the possession of relatively inaccessible tools such as first aid kits, swiss army knives, guns, and battle axes. As a student however, you most likely will not be able to obtain these without taking considerable risk once an outbreak is already in progress. This section will show the different tools that you as a student will be able to obtain in order of importance.
        </p>
        <div onClick={() => changeNecessaryToolsOpen(!necessaryToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
          <Icon size={{default: 32}} icon={{default: `md-caret-${necessaryToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Necessary Tools</h1>
        </div>
        {necessaryToolsOpen
          ? <>
            <Card className='dark'>
              <h2>Backpack</h2>
              <ul>
                <li>Essential for any trip outside of your shelter</li>
                <li>Will store all the other supplies you will bring with you and will store any items you find on your journeys</li>
                <li>One is already readily available</li>
              </ul>
              <p>
              <strong>DO NOT</strong> substitute for a purse or duffel bag. They may limit your arm movement.
              </p>
              <img src={backpack} style={{ height: 200, margin: '0 auto', display: 'block' }} />
            </Card>
            <Card className='dark'>
              <h2>Water Bottle</h2>
              <ul>
                <li>Should be at least <strong>24oz</strong></li>
                <li>Should be insulating to keep heat or cold</li>
                <li>Bring some form of water filter before filling your water bottle</li>
              </ul>
              <p>
                <strong>DO NOT</strong> use pre-packaged bottled water. These container are not very durable and can cause issues with sound later on.
              </p>
              <img src={waterbottle} style={{ height: 200, margin: '0 auto', display: 'block' }} />
            </Card>
            <Card className='dark'>
              <h2>Blunt Weapon (Bat)</h2>
              <p>
                You <em>will</em> encounter zombies as you roam around your environment. A blunt weapon, such as a bat, will be essential for dealing with zombies nearby.
              </p>
              <ul>
                <li>Should be easy to hold for long periods of time</li>
                <li>Should not make too much noise when hitting something (ideally not metal)</li>
                <li>Should be reasonably durable</li>
              </ul>
              <p>
                <strong>DO NOT</strong> store your weapon in your backpack. This weapon must always be on your side in the event of a surprise zombie attack.
              </p>
              <img src={bat} style={{ height: 200, margin: '0 auto', display: 'block' }} />
            </Card>
            <Card className='dark'>
              <h2>Crowbar</h2>
              <ul>
                <li>Can help open doors and pry open objects</li>
                <li>Can be a surprisingly effective weapon in a surprise scenario</li>
              </ul>
              <p>
                <strong>DO NOT</strong> keep the crowbar out by your side. Crowbars are loud and can draw unwanted attention if you accidentally hit something.
              </p>
              <img src={crowbar} style={{ height: 200, margin: '0 auto', display: 'block' }} />
            </Card>
            <Card className='dark'>
              <h2>Sharp Knife</h2>
              <p>A sharp knife is another versitile tool that can be used in multiple different ways.</p>
              <ul>
                <li>Should be used primarily as a tool to cut things like packages, food, and clothing</li>
                <li>Can also be used a short-range weapon</li>
                <li>Can be dangerous if you are not trained</li>
              </ul>
              <p><strong>DO NOT</strong> use a knife as your primary weapon. Weilding a knife as a weapon requires special technique in order to be effective.  </p>
              <img src={knife} style={{ height: 200, margin: '0 auto', display: 'block' }} />
            </Card>
            </>
          : null}
        <div onClick={() => changeOptionalToolsOpen(!optionalToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
          <Icon size={{default: 32}} icon={{default: `md-caret-${optionalToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Optional Tools</h1>
        </div>
        {optionalToolsOpen
          ? <div>
              <Card className='dark'>
                <h2>Ranged Weapon</h2>
                <p>
                  A ranged weapon is something that is nice to have. A ranged weapon can be anything from a gun to a taser to a crossbow. These items are going to be more difficult to obtain. This will allow you to attack zombies from a distance, preventing potential physical contact.
                </p>
                <p>
                  <strong>DO NOT</strong> attack zombies unless they are hostile towards you. Attacking when zombies do not see you will attract unnecessary attention and can put you in danger.
                </p>
                <img src={shotgun} style={{ width: '100%', textAlign: 'center' }} />
              </Card>
              <Card className='dark'>
                <h2>Playing Cards</h2>
                <p>
                  To keep yourself entertained so you don’t go insane. Can be played with others or by yourself.
                </p>
                <img src={cards} style={{ height: 200, margin: '0 auto' }} />
              </Card>
            </div>
          : null}
      </div>
    </div>


    // </Page>
  )
}

export default Gear;
