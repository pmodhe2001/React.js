import React from 'react';    
    const CartItem=(props)=>{
        //console.log(this.props)
        const{price,title,qty}=props.product;
        const{
            product,
            onIncreaseQty,
            onDecreaseQty,
            onDeleteProduct
        }=props;
        return(
              
              <div className="cart-item">
                
                <div className='left-block'>
                  <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                   <div style={{fontSize:25}}>{title}</div>
                   <div style={{fontSize:25}}>Rs : {price}</div>
                   <div style={{fontSize:25}}>Qty : {qty}</div>
                   <div className='cart-item-actions'>
                     {/* Buttons */}
                     <img
                      alt="increase"
                      className='action-icons'
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                      onClick={()=>onIncreaseQty(product)}
                      />
                     <img
                      alt="decrease"
                      className='action-icons'
                      src="https://cdn-icons-png.flaticon.com/128/463/463700.png"
                      onClick={()=>onDecreaseQty(product)}
                      />
                     <img
                      alt="delete"
                      className='action-icons'
                      src="https://cdn-icons-png.flaticon.com/512/2602/2602768.png"
                      onClick={()=>onDeleteProduct(product.id)}
                     />
                     </div>
                   
              </div>
            </div>
        );
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