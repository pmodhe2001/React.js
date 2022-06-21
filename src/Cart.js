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
handleIncreaseQty=(product)=>{
  console.log("Increase Qty");
  const{products}=this.state;
  const index=products.indexOf(product);
  product[index].qty+=1;

  this.setState({
    products
  })
}
handleDecreaseQty=(product)=>{
  console.log("Decrease Qty");
  const{products}=this.state;
  const index=products.indexOf(product);
  product[index].qty-=1;

  if(products[index].qty===0){
    return;
  }

  this.setState({
    products
  })
}
handleDeleteProduct=(id)=>{
  const {products}=this.state;
  const items=products.filter((item)=>item.id!==id);
  this.setState({
    products:items
  })
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
                         key={product.id}
                         onIncreaseQty={this.handleIncreaseQty}
                         onDecreaseQty={this.handleDecreaseQty}
                         onDeleteProduct={this.handleDeleteProduct}
                         />
                    )
                  }
                )}
              </div>          
        );
    }
}


export default Cart;
