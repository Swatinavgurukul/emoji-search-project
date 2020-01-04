import React, { Component } from 'react';
import logo1 from './cat1.png';
import logo2 from './cat2.png';
// import './App.css';
class HeaderComponent extends Component {
  render() {
    return (
      <header className="component-header">
        <div>
          <span><img src={logo1} /><span className="heading">Emojis Search</span><img src={logo2} /> </span>
        </div>
      </header>
    )
  }
}
export default HeaderComponent;