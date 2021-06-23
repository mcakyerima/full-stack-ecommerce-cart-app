import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0? <div className="cart-header cart"> Cart is Empty</div>:
                <div className="cart-header cart"> You Have {cartItems.length} items in the cart {""}</div>}
                
            </div>
        )
    }
}
