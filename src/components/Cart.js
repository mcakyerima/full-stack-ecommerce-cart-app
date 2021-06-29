import React, { Component } from 'react'
import formatCurrency from './utilities';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0 ? (<div className="cart-header cart"> Cart is Empty</div>)
                :(
                <div className="cart-header cart"> You Have {cartItems.length} items in the cart {""}
                </div>
                )}
                
                <div className="main-cart">
                    <div className="cart ">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            <div className="price">
                                                { ` ${formatCurrency(item.price)} x ${item.count}`} {" "}
                                            </div>
                                            <button className="del_button" onClick={()=> this.props.removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    { cartItems.length !== 0 && 
                         <div className="cart">
                         <div className="total">
                             <div>
                                 Total: {" "}
                                 {formatCurrency(
                                    cartItems.reduce((a,c) => a + (c.price * c.count) , 0)
                                 )
                                 
                                 }
                             </div>
                             <button className="go_button">
                                 Proceed
                              </button>
                         </div>
                     </div>
                    }  
                </div>
               

            </div>
           
        );
    }
}
