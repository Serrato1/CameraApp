import { combineReducers } from 'redux'
import {PRODUCTS_RECEIVED,ADD_TO_CART,REMOVE_FROM_CART } from '../actions'
function cart(state =[],action){
  switch (action.type){
    case ADD_TO_CART:
      action.product.inCart = true;
      return [...state,action.product ]
    case REMOVE_FROM_CART:
      action.product.inCart = false
      let newState = state;
      console.log("INDEX OF ITEM IN CART",state.indexOf(action.product))
      newState.splice(state.indexOf(action.product),1)
      return [...newState]
    default:
      return state
  }
}
function products(state = { byId: {}, all: [] }, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      const productsById = action.products.reduce((result, product) => {
        result[product.id] = product
        return result
      }, {})

      return {
        ...state,
        byId: productsById,
        all: action.products
      }
    default:
      return state
  }
}

export default combineReducers({
  products,
  cart,
})
