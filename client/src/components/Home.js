import React from 'react';
import { Page, Card } from 'react-onsenui';

import zombee from '../assets/zombee.jpg';
import gt from '../assets/gt.jpg';

function Home() {
  return (
    <Page>
      <Card>
        <img src={zombee} style={{ width: '50%' }} />
        <img src={gt} style={{ width: '50%' }} />
      </Card>
      <Card>
        <h1>GT Zombie Apocalypse Guide</h1>
        <p>
          You are a Georgia Tech student trying to not have a mental breakdown due to your course overload. While you are praying to our lord George P. Burdell to not lose HOPE(sic), you hear muffled growling and piercing screams outside. You look out and see a chaotic frenzy of students running about, and some disfigured humanoid creature staggering after them. Since you’re not a u(sic)GA student, you quickly realize you’re in a zombie apocalypse, which requires you to drop everything you’ve been doing and focus on one thing: survival.
        </p>
        <p>
          This app is for people like you, a GT student stuck in the school where a lab experiment gone wrong produced an outbreak. In these different pages, you will see information on the zombies themselves, what equipment you should have, safe zones on campus, and combat strategies against zombies. Happy surviving!
        </p>
      </Card>
    </Page>
  );
}

export default Home;
