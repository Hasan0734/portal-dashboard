import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "./Sidebar.css";
import { sidebars } from "./sidebarData";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

 export default class Sidebar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    console.log(this.props)
    return (
      <aside className="sidebar_area">
        <div className="logo_area text-center">
          <a href="/">
            <img className="logo" width={100} src={logo} alt="portal logo" />
          </a>
        </div>

        <div className="sidebar_content mt-4">
          {/* larger device */}
          <div className="xl_sidebar">
            {sidebars.map((data, i) => (
              <div key={i}>
                <ul className="list-unstyled">
                  <li className="button_tilte" href="">
                    {data.title}
                  </li>
                </ul>

                <ul className="list-unstyled">
                  {data.items.map((item, index) => (
                    <li key={index} className="nav_item ">
                      <a
                        className={`nav_link ${
                          item.name === "Dipendenti" ? "nav_active" : ""
                        }`}
                        href={item.url}
                      >
                        <span
                          className={`me-2  ${
                            item.name === "Dipendenti" ? "text-white" : ""
                          }`}
                        >
                          {" "}
                          {item.icon}
                        </span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* small device */}

          <div className="sm_sidebar">
            {sidebars.map((data, i) => (
              <div key={i}>
                <ul className="list-unstyled">
                  <li className="button_tilte" href="">
                    {data.title}
                  </li>
                </ul>

                <ul className="list-unstyled">
                  {data.items.map((item, index) => (
                    <li key={index} className="nav_item ">
                      <a
                        className={`nav_link ${
                          item.name === "Dipendenti" ? "nav_active" : ""
                        }`}
                        href={item.url}
                      >
                        <span
                          className={`me-2  ${
                            item.name === "Dipendenti" ? "text-white" : ""
                          }`}
                        >
                          {" "}
                          {item.icon}
                        </span>
                        {/* {item.name} */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  }
}

const ShowTheLocationWithRouter = withRouter(Sidebar);
