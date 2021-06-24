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
                
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            { ` ${formatCurrency(item.price)} x ${item.price}`} {" "}
                                            <button className="button" onClick={()=> this.props.removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
           
        );
    }
}
