import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from './List'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createItem } from '../actions'


class Main extends Component {
  render () {
    return (
      <div className="grid-col-8 grid-row-8 bg-light height-full ">
        <div className="col-sz-8 rw-sz-1 " style={{background:'none'}}></div>
        <div className="col-sz-1 rw-sz-5 " style={{background:''}}></div>
        <List />
      </div>
    )
  }
}

export default Main
