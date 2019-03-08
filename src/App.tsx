import React, { Component } from 'react';
import Section from './Section';
import Navigator from './Navigator';

class App extends Component {
  render() {
    return <div className="App">
      <h1>Shady Squirrel: Web App</h1>
        <p>
          This is a test for <a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Apps</a>. This site is a valid PWA.
        </p>
        <Section title="Custom Tab Bar">
          <Navigator/>
        </Section>
      </div>;
  }
}

export default App;
