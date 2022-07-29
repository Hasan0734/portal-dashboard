import React from 'react'
import Banner from '../Banner/Banner'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

export default function Layout({ children }) {
    return (
        <>
            <Banner />
            <div className='d-flex w-100'>

                {/* sidebar start  */}
                <div className='sidebar'>
                    <Sidebar />
                </div>

                {/* sidebar end  */}

                {/* main body section  start*/}

                <main className='main_body ms-5'>
                    {/* pass the children */}
                    {children}
                </main>
                {/* main body section  end*/}
            </div>
        </>
    )
}
