import { leftArrow } from './../../assets/svg/svg';
import React, { Component } from 'react'
export default class StaticButton extends Component {
  render() {
    return (
        <div>
        <button className='btn border border-2 px-3 py-1'> {leftArrow}</button>
    </div>
    )
  }
}
