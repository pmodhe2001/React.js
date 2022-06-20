import React from 'react';


class CartItem extends React.Component{
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
    increaseQty=()=>{
        console.log('this',this);
    }
    decreaseQty=()=>{
        console.log('this',this);
    }
    deleteQty=()=>{
        console.log('this',this);
    }
    render(){
        const{price,title,qty}=this.state;
        return(
              
              <div className="cart-item">
                <div className='left-block'>
                  <img style={styles.image}/>
                </div>
                <div className="right-block">
                   <div style={{fontSize:25}}>{title}</div>
                   <div style={{fontSize:25}}>Rs : {price}</div>
                   <div style={{fontSize:25}}>Qty : {}</div>
                   <div className='cart-item-actions'>
                     {/* Buttons */}
                     <img
                      alt="increase"
                      className='action-icons'
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                      onClick={this.increaseQty.bind(this)}
                      />
                     <img
                      alt="decrease"
                      className='action-icons'
                      src="https://cdn-icons-png.flaticon.com/128/463/463700.png"
                      onClick={this.decreaseQty.bind(this)}
                      />
                     <img
                      alt="delete"
                      className='action-icons'
                      src="https://cdn-icons.flaticon.com/png/128/6096/premium/6096937.png?token=exp=1655751763~hmac=4c655942907de9f2688a2ef500983623"
                      onClick={this.deleteQty.bind(this)}
                      />
                   </div>
                   
              </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;