import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
  //For list of products
  constructor(){
    super();
    this.state={
        price:16999,
        title:'MobilePhone',
        qty:1,
        img:''
    }
    //this.increaseQty=this.increaseQty.bind(this);
}
    render(){
      const arr=[1,2,3,4,5];
        return(
             
              <div className='cart'>
                <CartItem qty={1} price={(2,999).toLocaleString(undefined,{maximumFractionDigits:2})} title={'Watch'} img={''}/>
                <CartItem/>
                <CartItem/>
              </div>          
        );
    }
}


export default Cart;
