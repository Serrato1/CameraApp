import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

class SearchInput extends Component {
  state = {
    searchInput : ''
  }
  onSubmit = (e)=>{
    e.preventDefault();

    console.log('submit search',this.state.searchInput);
    this.props.onSearch(this.state.searchInput)
  }
  onChange = (e)=>{
    let searchInput = e.target.value ;
    this.setState({searchInput})
    if(e.key =='Enter'){
      this.onSubmit(e)
    }
  }
  render(){
    return(
        <div className="search-container">
          <form className="form" onSubmit={this.onSubmit}>
            <input type="text" placeholder="Search For Camera" onChange ={this.onChange}></input>
          </form>
        </div>
    )
  }
}


export default SearchInput
