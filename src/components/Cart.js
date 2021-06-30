import React, { Component } from 'react'
import formatCurrency from './utilities';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,
        };
    }

    handleInput = (e) => {
        this.setState({
                [e.target.name] : e.target.value
            })
        };

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            cartItems: this.props.cartItems
        };
        this.props.createOrder(order)
    }
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
                    { cartItems.length !== 0 && (
                        <>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(
                                            cartItems.reduce((a,c) => a + (c.price * c.count) , 0)
                                        )
                                        
                                        }
                                    </div>
                                    <button onClick={()=> this.setState({showCheckout: true})} className="go_button">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                            {
                                this.state.showCheckout && 
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <input type="email" 
                                                name="email"
                                                required onChange={this.handleInput}></input>
                                                <label>Email</label>
                                            </li>
                                            <li>
                                                <input type="text"
                                                name="name" 
                                                required onChange={this.handleInput}></input>
                                                 <label className="tag">Name</label>
                                            </li>
                                            <li>
                                                <input type="text"
                                                name="address"
                                                 required onChange={this.handleInput}></input>
                                                  <label>Address</label>
                                            </li>
                                            <li>
                                                <button type="submit" className="go_button">
                                                    Checkout
                                                </button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            }
                        </>
                    )}  
                </div>
               

            </div>
           
        );
    }
}
