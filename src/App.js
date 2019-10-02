import React, { Component } from 'react';
import Travel from './components/Travel'
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Travel destination='Paris' country='France' photo='Tour Eiffel' distance='300m'/>
        <Travel destination='Berlin' country='Allemagne' photo='Le mur' distance='1500km'/>
      </div>
    );
  }
}

export default App;
