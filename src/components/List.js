import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addToCart,removeFromCart} from '../actions/index.js'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ListItem from './ListItem.js'
import SearchInput from './SearchInput.js'
class List extends Component {
  state={
    searchTerm : ''
  }
  onSearchSubmit = (searchTerm)=>{
    console.log('received search')
    this.setState({searchTerm})
  }
  render () {

    console.log('props products',this.props.products)
    console.log('cart',this.props.cart)
    console.log('state "searchterm" : ',this.state.searchTerm)
    let cartItems = this.props.cart;
    let subtotal = cartItems.reduce((accum, item)=>{
      return accum + parseInt(item.price.replace('$','').replace(',',''));
    },0)

    let tax = (subtotal * .086);
    let total = (subtotal + tax).toFixed(2); ;
    cartItems = cartItems.map((item,indx)=>{
      return <li key={indx} >{item.name}</li>
    })

    let productList = this.props.products.all;
    if(this.state.searchTerm === ''){
      productList = productList.map((product,indx)=>{
        return <ListItem product={product} key={indx} removeFromCart={()=>this.props.removeFromCart(product)} addToCart={()=>this.props.addToCart(product)}/>
      })
    }else{
      productList = productList.filter((product)=>{
        let productName = product.name.toLowerCase();
        let searchTerm = this.state.searchTerm.toLowerCase();
        return productName.indexOf(searchTerm) >= 0 ;
      })
      productList = productList.map((product,indx)=>{
        return <ListItem product={product} key={indx} removeFromCart={()=>this.props.removeFromCart(product)} addToCart={()=>this.props.addToCart(product)}/>
      })
    }

    return (
        <div className="main-container col-sz-6 overflow-hidden" style={{background:'none'}}>
          <div className="filler"></div>
          <div className="main grid-col-auto overflow-scroll">
            <SearchInput onSearch ={(searchTerm)=>{this.onSearchSubmit(searchTerm)}}/>
            {productList}

          </div>

          <div className="sidebar">
            <div className="checkout-container edges-strong color-white  " style={{background:'#55efc4'}}>
              <h2 className="text-center">CHECKOUT</h2>
              <div className=" height-relative overflow-scroll">
                <div >Items:</div>
                <ul className="margin-left-strong">
                        {cartItems}
                </ul>
              </div>
              <div>Subtotal: ${subtotal} | Tax : ${tax.toFixed(2)} | Total : ${total} </div>
              <form className="form grid-col-1 grid-row-3">
                <input className="edges-strong bg-white" type="submit" value="CHECKOUT"></input>
              </form>
            </div>
          </div>
          <div className="footer"></div>

        </div>
    )
  }
}
List.propTypes={
  products : PropTypes.object
}
const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToCart: addToCart,
    removeFromCart: removeFromCart
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
