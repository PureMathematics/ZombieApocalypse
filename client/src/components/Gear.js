import React from 'react';
import { Page, Card, Icon } from 'react-onsenui';
import waterbottle from '../assets/waterbottle.png';
import backpack from '../assets/backpack.jpg';
import cards from '../assets/cards.png';
import weapon from '../assets/weapon.png';

function Gear() {
  const [necessaryToolsOpen, changeNecessaryToolsOpen] = React.useState(false);
  const [optionalToolsOpen, changeOptionalToolsOpen] = React.useState(false);
  return (
    <Page>
      <Card>
        <h1>Overview</h1>
      </Card>
      <Card>
        <p>
          Many zombie guides recommend the possession of relatively inaccessible tools such as first aid kits, swiss army knives, guns, and battle axes. As a student however, you most likely will not be able to obtain these without taking considerable risk once an outbreak is already in progress. This section will show the different tools that you as a student will be able to obtain, and how to use them.
        </p>
      </Card>
      <Card onClick={() => changeNecessaryToolsOpen(!necessaryToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
      <Icon size={{default: 32}} icon={{default: `md-caret-${necessaryToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Necessary Tools</h1>
      </Card>
      {necessaryToolsOpen
        ? <><Card>
            <h2>Backpack</h2>
            <p>
              Luckily, a backpack is one of the most useful items in general for an apocalypse, and you as a student probably already have one. Carry this around at all times to store other supplies you need. Purses and duffel bags are less effective as they may limit your arm movement.
            </p>
            <img src={backpack} style={{ height: 200, margin: '0 auto' }} />
          </Card>
          <Card>
            <h2>Water Bottle</h2>
            <p>
              Not much explanation needed. Fortunately, water sources are still active, so water in general is accessible.
            </p>
            <img src={waterbottle} style={{ height: 200, margin: '0 auto' }} />
          </Card>
          <Card>
            <h2>Blunt Weapon</h2>
            <p>
              Necessary for dealing with inevitable zombie encounters, more on good blunt weapon practices can be seen in the Combat Strategies page in this app.
            </p>
            <img src={weapon} style={{ height: 200, margin: '0 auto' }} />
          </Card></>
        : null}
      <Card onClick={() => changeOptionalToolsOpen(!optionalToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
        <Icon size={{default: 32}} icon={{default: `md-caret-${optionalToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Optional Tools</h1>
      </Card>
      {optionalToolsOpen
        ? <Card>
            <h2>Playing Cards</h2>
            <p>
              To keep yourself entertained so you don’t go insane. Can be played with others or by yourself.
            </p>
            <img src={cards} style={{ height: 200, margin: '0 auto' }} />
          </Card>
        : null}
    </Page>
  )
}

export default Gear;
