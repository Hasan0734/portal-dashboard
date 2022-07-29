import React from "react";
import "./SelectOption.css";
export default function SelectOption() {
  return (
    <div className="select_area">
      <div className="d-flex">
        <label className="select_label me-3">Seleziona</label>
        <div>
          {" "}
          <select className="select_option">
            <option>Sandra Sabia</option>
          </select>
        </div>
      </div>
    </div>
  );
}
