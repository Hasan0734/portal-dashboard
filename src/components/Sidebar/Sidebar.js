import React from 'react';
import logo from '../../assets/logo.png';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <aside className='sidebar_area'>
            <div className='logo_area text-center'>
                <a href='/'>
                    <img className='logo' width={100} src={logo} alt="portal logo" />
                </a>
            </div>

            <div className='sidebar_content mt-4'>
                <div>
                    <ul className='list-unstyled'>
                        <li className='button_tilte' href="">Team Manager</li>
                    </ul>

                    <ul className='list-unstyled'>
                        <li className='nav_item'>
                            <a className="nav_link" href='/dashboard'>Dashboard</a>
                        </li>
                        <li className='nav_item'>
                            <a className="nav_link" href='/dashboard'>Dashboard</a>
                        </li>
                        <li className='nav_item nav_active'>
                            <a className="nav_link " href='/dashboard'>Dashboard</a>
                        </li>
                        <li className='nav_item'>
                            <a className="nav_link" href='/dashboard'>Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
