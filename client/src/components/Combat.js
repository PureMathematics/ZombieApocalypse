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

    </Page>
  )
}

export default Combat;
