// import './App.css';
// import Dipendenti from './components/Dipendenti/Dipendenti';
// import Layout from './components/Layout/Layout';

// function App() {
//   return (
//     <Dipendenti/>

//   );
// }

// export default App;



import React, { Component } from 'react'
import Dipendenti from './components/Dipendenti/Dipendenti';

export default class App extends Component {
  render() {
    return (
      <Dipendenti/>
    )
  }
}
