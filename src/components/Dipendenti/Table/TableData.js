import React, { Component } from "react";
import {location as locationIcon,
  } from "../../../assets/svg/svg";
import "./Table.css";
export default class TableData extends Component {
  render() {
    return (
      <tr className="m-2">
        <td className="text-center td_data">11/07/22</td>
        <td className="text-center td_data">09:45</td>
        <td className="text-center td_data">13:02</td>
        <td className="text-center td_data">13:58</td>
        <td className="text-center td_data">18:15</td>
        <td className="text-center td_data">Qr</td>
        <td className="text-center td_data by_location_box">
          <span className="by_location text-center d-flex justify-content-center gap-2 align-items-center">
            <span>{locationIcon}</span>
            <span>Via Torchicoda n4, ...</span>
          </span>
        </td>
        <td className=""></td>
        <td className=""></td>
      </tr>
    );
  }
}
