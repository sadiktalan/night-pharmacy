import React, { Component } from 'react'
import '../../styles/Sidebar.css'
import SideBarHeader from '../MenuItems/SideBarHeader';
import SidebarItem from '../MenuItems/SidebarItem';

export interface IPharmacyList {
  pharmacies: SidebarItem[]
}

class Sidebar extends Component<IPharmacyList> {
  render() {
    return (
      <div className= "Sidebar">
          <SideBarHeader/>
          <ul>{this.props.pharmacies}</ul>
      </div>
    )
  }
}
export default Sidebar;