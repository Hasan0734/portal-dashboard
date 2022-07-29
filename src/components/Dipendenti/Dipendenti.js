import Layout from '../Layout/Layout'
import StaticButton from '../StaticButton/StaticButton';
import React, { Component } from 'react'
import Tabs from '../Tabs/Tabs';
import SelectOption from '../SelectOption/SelectOption';

export default class Dipendenti extends Component {
  render() {
    return (
        <Layout>
        <div>
            {/* sidebar static button */}
            <StaticButton />
            <div>
              <SelectOption/>
                <Tabs/>
            </div>
        </div>
    </Layout>
    )
  }
}
