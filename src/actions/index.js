import axios from 'axios'

//ADD CART
export const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(product) {
  return  (dispatch) => {
      console.log("------\nCALLED DISPATCH ADD_TO_CART\n----------");
      dispatch({
        type: ADD_TO_CART,
        product: product
      })
  }
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function removeFromCart(product) {
  return  (dispatch) => {
      console.log("------\nCALLED DISPATCH REMOVE_FROM_CART\n----------");
      dispatch({
        type: REMOVE_FROM_CART,
        product: product
      })
  }
}
//PRODUCTS RECEIVED
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED'
export function fetchProducts() {
  return  (dispatch) => {
    axios(`http://localhost:8082/api/cameras`)
    .then(({data})=>{
      console.log("------\nCALLED DISPATCH FETCHPRODUCTS\n----------");
      dispatch({
        type: PRODUCTS_RECEIVED,
        products: data
      })
    })

  }
}
//ITEM RECEIVED
export const ITEMS_RECEIVED = 'ITEMS_RECEIVED'
export function fetchItems() {
  return async (dispatch) => {
    axios(`http://localhost:8082/api/items`)
    .then(({data})=>{
      dispatch({
        type: ITEMS_RECEIVED,
        items: data
      })
    })

  }
}
//ITEM CREATE
export const ITEM_CREATED = 'ITEM_CREATED'
export function createItem(quantity, product) {
  return async (dispatch) => {
    const response = await fetch(product._links.items.href, {
      method: 'POST',
      body: JSON.stringify({ quantity: quantity }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const createdItem = await response.json()
    dispatch({
      type: ITEM_CREATED,
      item: createdItem
    })
  }
}
