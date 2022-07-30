import React, { Component } from "react";
import Layout from "../Layout/Layout";
import SelectOption from "../SelectOption/SelectOption";
import StaticButton from "../StaticButton/StaticButton";
import Tabs from "../Tabs/Tabs";
import "./Dipendenti.css";
import StatusArea from "./StatusArea/StatusArea";
import { copyIcon } from "./../../assets/svg/svg";
import Table from "./Table/Table";
import { tableData } from "./dummyData";

export default class Dipendenti extends Component {
  render() {
    // console.log(tableData[0].body)
    return (
      <Layout>
        <div>
          {/* sidebar static button */}
          <StaticButton />
          <div>
            <SelectOption />
            <Tabs />
            <StatusArea />

            <div className="historical_tramping mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="timbrarue_title">STORICO TIMBRARURE</h3>
                <button className="export_area d-flex gap-1 align-items-center">
                  <span className="export_icon ">{copyIcon}</span>
                  <span className="export_ttile">Esporta Timbrature</span>
                </button>
              </div>
            </div>

            {/* Table */}

            {tableData.map((dt, i) => <Table key={dt.id} title={dt.title} body={dt.body} />)}
              
            
          </div>
        </div>
      </Layout>
    );
  }
}
