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
        <p>Overview Text to be done</p>
      </Card>
      <Card onClick={() => changeNecessaryToolsOpen(!necessaryToolsOpen)} style={{ display: 'flex', alignItems: 'center' }}>
      <Icon size={{default: 32}} icon={{default: `md-caret-${necessaryToolsOpen ? 'up' : 'down'}-circle`}} style={{ marginRight: 10 }} /><h1>Necessary Tools</h1>
      </Card>
      {necessaryToolsOpen
        ? <><Card>
            <h2>A baseball bat</h2>
            <p>
            Excels at breaking bones. Going for the leg is a good option as this permanently disables the zombie from ever walking again, so going for the leg is a good investment for preventing threats in future survivals.
            </p>
          </Card>
          <Card>
            <h2>Crowbar</h2>
            <p>
            Weapons like crowbar are always preferable due to their multiple usages in Zombie survival. 
            </p>
          </Card>
          <Card>
            <h2>Shart knife</h2>
            <p>
            is not suited for breaking bones. So sharp weapons are at a disadvantage. Quickly stab the eye of the zombie to impair its vision.
            </p>
          </Card>
          <Card>
            <h2>Ranged weapon</h2>
            <p>
            Is very dependant on wielder’s aim. Aim a zombie’s brain to destroy a critical movement function. If the zombie gets too close, using melee weapons can be more effective.
            </p>
          </Card></>
        : null}
    </Page>
  )
}

export default Combat;
