import React,{Component} from 'react';


class ListItem extends Component{
  render(){
    let product = this.props.product;
    let {name,picture,price,rating,inCart} = this.props.product;
    let addCartDisplay  = inCart ? <h3 className="cursor-pointer" onClick={()=>{this.props.removeFromCart()}} >REMOVE FROM CART</h3> : <h3 onClick={()=>{this.props.addToCart()}} className="cursor-pointer">Add To Cart</h3>;
    return(
      <div className="item-container item-center edges-strong ">
              <div className="bg-white text-center">
                  <h1 className="">
                    {name}
                  </h1>
                  <img src={picture} />
             </div>
              <div className="bg-white text-center">
                <h5>PRICE : {price}<br/><h6>RATING : {rating} Stars</h6></h5>
                {addCartDisplay}
              </div>
     </div>
  )
  }
}

export default ListItem;
