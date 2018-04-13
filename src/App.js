import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap' ;
import {connect} from 'react-redux'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

class App extends Component {
  render() {
    console.log('app props: ',this.props)
    // console.log('properties',this.props)
    return (
      <div className="App">
        <Header />
        <Main />
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
