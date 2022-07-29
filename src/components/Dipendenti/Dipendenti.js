import Layout from '../Layout/Layout'
import StaticButton from '../StaticButton/StaticButton';
import React, { Component } from 'react'

export default class Dipendenti extends Component {
  render() {
    return (
        <Layout>
        <div>
            {/* sidebar static button */}
            <StaticButton />
            <div>
                
            </div>
        </div>
    </Layout>
    )
  }
}
