import React from 'react';
import { Page, Card, Icon } from 'react-onsenui';

import mapCRC from '../assets/mapcrc.png';
import stamps from '../assets/stamps.jpg';
import studentcenter from '../assets/studentcenter.jpg';
import mapdowntown from '../assets/mapdowntown.png';
import mapairport from '../assets/mapairport.png';
import mapmarta from '../assets/mapmarta.png';
import splashGeography from '../assets/splashGeography.jpg';

function Geography() {
  const [gtLocationsOpen, changeGTLocationsOpen] = React.useState(false);
  const [externalLocationsOpen, changeExternalLocationsOpen] = React.useState(false);

  return (
    <div style={{
      color: 'white',
    }}>
      <div style={{
        position: 'relative',
      }}>
        <img src={splashGeography} style={{
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
          <h1 style={{ fontSize: '36pt'}}>Geography</h1>
          <h2 style={{ fontSize: '20pt'}}>Campus and Surroundings</h2>
        </div>
      </div>
      <div style={{
        margin: 20,
      }}>
        <p>
          It is very important that you know your way around the Georgia Tech Campus. There are some notable locations that you should definitely avoid as well as places that may be helpful.
        </p>
        <div onClick={() => changeGTLocationsOpen(!gtLocationsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
          <Icon size={{default: 32}} icon={{default: `md-caret-${gtLocationsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Georgia Tech Campus</h1>
        </div>
        {gtLocationsOpen
          ? <>
            <Card className='dark'>
              <h2>Campus Recreation Center (CRC)</h2>
              <ul>
                <li>The CRC likely has a large number of blunt objects that can be used as weapons.</li>
                <li>It is a large open space with relatively few entrances, so little opportunity for surprises.</li>
                <li>Plenty of equipment that can be used to stay in shape.</li>
                <li>Houses a smoothie cafe.</li>
              </ul>
              <img src={mapCRC} width={'100%'} />
            </Card>
            <Card className='dark'>
              <h2>Stamps Health Center</h2>
              <ul>
                <li>Located immediately south of the CRC.</li>
                <li>Contains a lot of medical supplies and drugs that could be useful for members of your party.</li>
                <li>Likely contains a lot of injured students who may be infected, so remain cautious when entering Stamps.</li>
                <li>The building is largely covered with a sheet of glass, so the building is not well protected.</li>
              </ul>
              <img src={stamps} width={'100%'} />
            </Card>
            <Card className='dark'>
              <h2>Student Center</h2>
              <ul>
                <li>Building is nearly entirely brick with few windows and many isolated rooms.</li>
                <li>Contains many dining options, so it makes for a great first stop.</li>
                <li>This serves as the hub of all campus activities, so it will likely be crowded.</li>
              </ul>
              <img src={studentcenter} width={'100%'} />
            </Card>
            </>
          : null}
        <div onClick={() => changeExternalLocationsOpen(!externalLocationsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
          <Icon size={{default: 32}} icon={{default: `md-caret-${externalLocationsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Off Campus</h1>
        </div>
        {externalLocationsOpen
          ? <div>
              <Card className='dark'>
                <h2>Centennial Olympic Park</h2>
                <ul>
                  <li>Located nearby the CNN center, a potential source of information, and the Georgia World Congress Center, a large and spacious building.</li>
                  <li>Centrally located and likely the hub for people in the City of Atlanta.</li>
                  <li>Also located near Mercedes Benz Stadium and State Farm Area, both large event venues with plenty of space and amenities.</li>
                </ul>
                <img src={mapdowntown} width={'100%'} />
              </Card>
              <Card className='dark'>
                <h2>Hartsfield-Jackson Atlanta International Airport</h2>
                <ul>
                  <li>Terminal and concourses are relatively isolated compared to the surrounding area.</li>
                  <li>Has a built-in tower that can serve as a watch-tower to watch out for attacks.</li>
                  <li>Likely has tight security and significant barricading to protect humans inside.</li>
                  <li>A very large number of jet-bridges that can be used to safely transport uninfected individuals between airports without contact to the outside world.</li>
                </ul>
                <img src={mapairport} width={'100%'} />
              </Card>
              <Card className='dark'>
                <h2>Midtown MARTA</h2>
                <ul>
                  <li>Large concrete building, so remarkably sturdy and grounded.</li>
                  <li>Main structure is almost entirely underground.</li>
                  <li>Only one primary entrance and exit point, so barricades are easy to create.</li>
                  <li>Tunnels can be used to travel between other stations in the city.</li>
                  <li>Trains can be used to block zombies from travelling within the tunnels.</li>
                </ul>
                <img src={mapmarta} width={'100%'} />
              </Card>
            </div>
          : null}
      </div>
    </div>
  );
}

export default Geography;
