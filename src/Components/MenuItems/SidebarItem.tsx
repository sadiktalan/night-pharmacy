import React, { Component } from 'react'
import '../../styles/SidebarItem.css'

export interface Pharmacy{
  name: string,
  telephone: string,
  location : string
}

class SidebarItem extends Component<Pharmacy> {

  render() {
    return (
      <div className='SidebarItem'>
      <div>{this.props.name}</div>
      <div>{this.props.telephone}</div>
      </div>
    )
  }
}
export default SidebarItem;