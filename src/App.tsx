import React, { Component } from 'react';
import Section from './Section';
import Navigator from './NavigatorSection';
import NavigatorSection from './NavigatorSection';
import BadgeSection from './BadgeSection';

class App extends Component {
  render() {
    return <div className="App">
      <h1>Shady Squirrel: Web App</h1>
        <p>
          This is a test for <a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Apps</a>. This site is a valid PWA.
        </p>
        <NavigatorSection/>
        <BadgeSection/>
      </div>;
  }
}

export default App;
