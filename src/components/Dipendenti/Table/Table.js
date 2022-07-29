import React, { Component } from 'react'
import { directionArrrow, location } from '../../../assets/svg/svg'
import './Table.css'
export default class Table extends Component {

  render() {
    return (
      <div className='mt-3'>
        <table className='table_area w-100'>
          <thead className='mb-2'>
            <tr>
              <th className='table_main_title' rowspan="2">Luglio 2022</th>
              <th className='table_head text-center'>Ore totali</th>
              <th className='table_head text-center'>Ore Mensili</th>
              <th className='table_head text-center'>Differenza</th>
              <th className='table_head text-center'>Permesi</th>
              <th className='table_head text-center'>Ferie</th>
              <th className='table_head text-center'>Malattia</th>
              <th className='table_head text-center'>Straordirio</th>
              <th rowspan="2">{directionArrrow}</th>
            </tr>
            <tr>
              <th className='table_head_val text-center'>62</th>
              <th className='table_head_val text-center'>120</th>
              <th className='table_head_val text-center'>58h</th>
              <th className='table_head_val text-center'>1h</th>
              <th className='table_head_val text-center'>12h</th>
              <th className='table_head_val text-center'>0h</th>
              <th className='table_head_val text-center'>0h</th>
            </tr>
          </thead>

          <tbody className='table_body'>
              <tr>
                <td className='text-center td_head'>Data</td>
                <td className='text-center td_head'>Entrata</td>
                <td className='text-center td_head'>Uscita</td>
                <td className='text-center td_head'>Entrata</td>
                <td className='text-center td_head'>Uscita</td>
                <td className='text-center td_head'>Badge</td>
                <td className='text-center td_head'>Sede</td>
              </tr>

              <tr>
                <td className='text-center'>11/07/22</td>
                <td className='text-center'>09:45</td>
                <td className='text-center'>13:02</td>
                <td className='text-center'>13:58</td>
                <td className='text-center'>18:15</td>
                <td className='text-center'>Qr</td>
                <td className='text-center'>
                  <span className='by_location d-flex gap-2'>
                    <span>{location}</span>
                    <span>Via Torchicoda n4, ...</span>
                  </span>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
