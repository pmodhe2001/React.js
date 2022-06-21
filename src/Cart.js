import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
  //For list of products
  constructor(){
    super();
    this.state={
        products:[
          {
            price:2999,
            title:"Watch",
            qty:1,
            img:'',
            id:1
          },
          {
            price:19550,
            title:"Phone",
            qty:4,
            img:''
            ,
            id:2
          },
          {
            price:89960,
            title:"Laptop",
            qty:10,
            img:'',
            id:3
          }
        ]
    }
    //this.increaseQty=this.increaseQty.bind(this);
}
    render(){
      const {products}=this.state;
        return(
             
              <div className='cart'>
                {
                  products.map((product)=>{
                    return  (
                    <CartItem 
                        product={product}
                         key={product.id} />
                    )
                  }
                )}
              </div>          
        );
    }
}


export default Cart;
