import React, { Component } from 'react';
import Section from './Section';
import Navigator from './NavigatorSection';
import NavigatorSection from './NavigatorSection';
import BadgeSection from './BadgeSection';
import PermissionSection from './PermissionSection';
import Header from './Header';

class App extends Component {
  render() {
    return <div className="App">
      <Header
        title="Shady Squirrel: Web App"
        quote="Squirrels are shady"
        iconUrl="/quote-from.png"/>
        <p>
          This is a test for <a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Apps</a>. This site is a valid PWA.
        </p>
        <NavigatorSection/>
        <BadgeSection/>
        <PermissionSection/>
        {/** TODO: Set theme color */}
      </div>;
  }
}

export default App;
