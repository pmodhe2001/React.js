import React from 'react';

class CartItem extends React.Component{
    
    increaseQty=()=>{
        /*
        this.state.qty+=1
        console.log('this',this.state)*/
        // setState form 1
        /*
        this.setState({
            qty:this.state.qty+=1
        });*/
        //console.log('this',this);
     //s Staate 
     /*
         this.setState((prevState)=>{
                return{
                    qty: prevState.qty + 1
                }
         }); */ 
         
         this.setState((prevState)=>{
              return{
                qty:prevState.qty+1
              }
         }) ;

    }
    decreaseQty=()=>{
        //console.log('this',this);
        const{qty}=this.state;
        if(qty===0){
            return;
        }
        this.setState((prevState)=>{
            return{
                qty: prevState.qty - 1
            }
     });
    }
    /*
    deleteQty=()=>{
        //console.log('this',this);
        this.setState((prevState)=>{
            return{
                qty: prevState.qty - prevState.qty
            }
     });*/
    
    render(){
        console.log(this.props)
        const{price,title,qty}=this.props;
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
                      onClick={this.increaseQty}
                      />
                     <img
                      alt="decrease"
                      className='action-icons'
                      src="https://cdn-icons-png.flaticon.com/128/463/463700.png"
                      onClick={this.decreaseQty}
                      />
                     <img
                      alt="delete"
                      className='action-icons'
                      src="https://cdn-icons.flaticon.com/png/128/6096/premium/6096937.png?token=exp=1655751763~hmac=4c655942907de9f2688a2ef500983623"
                      
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