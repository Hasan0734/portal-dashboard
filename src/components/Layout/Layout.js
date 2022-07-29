import React from 'react'
import Banner from '../Banner/Banner'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

export default function Layout({ children }) {
    return (
        <>
            <Banner />

            <div className='d-flex'>
                <Sidebar />

                <div className=''>
                    {children}
                </div>
            </div>
        </>
    )
}
