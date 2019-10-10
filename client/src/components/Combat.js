import React from 'react';
import { Page, Card, Icon } from 'react-onsenui';

function Combat() {
  const [necessaryToolsOpen, changeNecessaryToolsOpen] = React.useState(false);
  const [optionalToolsOpen, changeOptionalToolsOpen] = React.useState(false);
  return (
    <Page>
      <Card>
      <h1>Overview</h1>
      </Card>
      <Card>
        <p>It is important that you have the necessary tools to get you out of most situations. We provide a list of basic tools and strategies that you will need that will prove to be helpful in a zombie encounter. While this is not an exhaustive list, these tools will provide assistance in the vast majority of encounters here at Georgia Tech.</p>
      </Card>
      <Card onClick={() => changeNecessaryToolsOpen(!necessaryToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
      <Icon size={{default: 32}} icon={{default: `md-caret-${necessaryToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Tools & Usage</h1>
      </Card>
      {necessaryToolsOpen
        ? <><Card>
            <h2>Baseball Bat</h2>
            <p>
              Excels at breaking bones. Going for the leg is a good option as this permanently disables the zombie from walking, either temporarily or permanently, so going for the leg is a good investment for preventing threats in future survivals.
            </p>
          </Card>
          <Card>
            <h2>Crowbar</h2>
            <p>
              Weapons like crowbar are always preferable due to their multiple usages in Zombie survival. Due to its weight, it can be effective towards the head and chest areas. It can also be useful in getting out of situations.
            </p>
          </Card>
          <Card>
            <h2>Sharp Knife</h2>
            <p>
              is not suited for breaking bones. Sharp weapons are at a disadvantage. Quickly stab the eye of the zombie to impair its vision, or aim for the rest of the face as it is the most sensitive area for zombies.
            </p>
          </Card>
          <Card>
            <h2>Ranged Weapon</h2>
            <p>
              Is very dependant on wielder’s aim. Aim a zombie’s brain to destroy a critical movement function. If the zombie gets too close, using melee weapons can be more effective. If zombies do not see you at a long range, do not attack them with your ranged weapon and attract attention.
            </p>
          </Card></>
        : null}
    </Page>
  )
}

export default Combat;
