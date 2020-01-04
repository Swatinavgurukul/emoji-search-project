import React, { Component } from 'react';
import './App.css';
// import './index.css';
import Hadar from './components/header';
import RibbonFun from './components/githubLinkBtn';


class App extends Component {
  render() {
    return (
      <div>
          <Hadar/>
          <RibbonFun/>

      </div>
    )
  }
}
export default App;
