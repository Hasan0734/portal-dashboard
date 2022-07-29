import React, { Component } from 'react'
import './Tabs.css'

export default class Tabs extends Component {
  render() {
    return (
      <div className='tab_area mt-4'>
        <ul className='tabs d-flex list-unstyled gap-2 w-100'>
          <li className="tab_item">
            <a className='tab_link' href="#profilo">Profilo</a>
          </li>
          <li className="tab_item">
            <a className='tab_link tav_active' href="#foglio-presenza">Foglio presenza</a>
          </li>
          <li className="tab_item">
            <a className='tab_link' href="#busta-paga">Busta paga</a>
          </li>
          <li className="tab_item">
            <a className='tab_link' href="#spese">Spese</a>
          </li>
          <li className="tab_item">
            <a className='tab_link' href="#viagge">Viagge</a>
          </li>
          <li className="tab_item">
            <a className='tab_link' href="#ferie">Ferie</a>
          </li>
        </ul>
      </div>
    )
  }
}
