import React, { Component } from 'react';
import Header from './Components/MainScreen/Header';
import InformationBar from './Components/MainScreen/InformationBar';
import Sidebar from './Components/MainScreen/Sidebar';
import Map from './Components/MainScreen/Map';
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Sidebar/>
          <Map/>
          <InformationBar/>
      </div>
    );
  }
}

export default App;
