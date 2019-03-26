import React, { Component } from 'react';
import Header from './Components/MainScreen/Header';
import InformationBar from './Components/MainScreen/InformationBar';
import Sidebar, { IPharmacyList } from './Components/MainScreen/Sidebar';
import Map from './Components/MainScreen/Map';
import './styles/App.css'
import SidebarItem from './Components/MenuItems/SidebarItem';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Sidebar pharmacies ={new Array<SidebarItem>()} />
          <Map/>
          <InformationBar/>
      </div>
    );
  }
}

export default App;
