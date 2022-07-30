import React, { Component } from "react";
import {
  directionArrrow,
} from "../../../assets/svg/svg";


import "./Table.css";
import TableData from "./TableData";

export default class Table extends Component {
  render() {
    return (
      <div className="mt-3">
        <table className="table_area w-100">
          <thead className="mb-2">
            <tr>
              <th className="table_main_title" rowspan="2">
                {this.props.title}
              </th>
              <th className="table_head text-center">Ore totali</th>
              <th className="table_head text-center">Ore Mensili</th>
              <th className="table_head text-center">Differenza</th>
              <th className="table_head text-center">Permesi</th>
              <th className="table_head text-center">Ferie</th>
              <th className="table_head text-center">Malattia</th>
              <th className="table_head text-center">Straordirio</th>
              <th
                style={{ width: "128px" }}
                className="text-center"
                rowspan="2"
              >
                {directionArrrow}
              </th>
            </tr>
            <tr>
              <th className="table_head_val text-center">62</th>
              <th className="table_head_val text-center">120</th>
              <th className="table_head_val text-center">58h</th>
              <th className="table_head_val text-center">1h</th>
              <th className="table_head_val text-center">12h</th>
              <th className="table_head_val text-center">0h</th>
              <th className="table_head_val text-center">0h</th>
            </tr>
          </thead>
          <br />
      
           {this.props.body.length > 0 && <tbody className="table_body">
              <tr>
                <td className="text-center td_head">Data</td>
                <td className="text-center td_head">Entrata</td>
                <td className="text-center td_head">Uscita</td>
                <td className="text-center td_head">Entrata</td>
                <td className="text-center td_head">Uscita</td>
                <td className="text-center td_head">Badge</td>
                <td className="text-center td_head">Sede</td>
                <td className="text-center td_head"></td>
                <td className="text-center td_head"></td>
              </tr>

              {/* data list */}
              {this.props.body.map((dt, i) => <TableData key={dt.id} body={dt}/> )}

            </tbody>}
      
        </table>
      </div>
    );
  }
}
