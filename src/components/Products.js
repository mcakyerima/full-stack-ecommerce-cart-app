import React, { Component } from 'react'
import formatCurrency from './utilities'
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {fetchProducts} from '../actions/productActions';
import {connect} from "react-redux"


class Products extends Component {
    constructor (props){
         super(props);
         this.state= {
             //set initial value of product to null if it does not exist
             product : null,
         };
    };
    //call products if component is mounted
    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = (product) => {
        this.setState({product})
    };
    closeModal = () => {
        //onClick. set product state to null. this stops the product from renderign since it only renders when the product is not null
        this.setState({product: null});
    };
    
    render() {
        //use destructuring assignment to add product as product state
        const {product} = this.state;

        return (
            <div className="section">
                <Fade bottom cascade={true}>
                    { 
                     !this.props.products ? <div>Loading.....</div>
                     :
                     <div className="section"> 
                     { this.props.products.map((product) => (

                        <div key={product._id} className="container">
                            <div className="card">
                                <div  onClick={() => this.openModal(product)} className={`imageBox ${product.category === "dress" ? "shirts" : "shoes"}` }>
                                    <img src={product.image} alt={product.title}/>
                                    <h2>{product.title}</h2>
                                    <h3> {formatCurrency(product.price)}</h3>
                                </div>
                                <div className="content">
                                        <div className="size">
                                            <h3>
                                                Size :
                                            </h3>
                                            {
                                            product.availableSizes.map((size, index) => (
                                                <span key={index}>{size}</span>
                                            ))
                                        }
                                        </div>
                                        <div className="color">
                                            <h3>
                                                Color :
                                            </h3>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <a href="#" onClick={()=>this.props.addToCart(product)}>Add To Cart</a>
                                    </div>
                            </div>
                        </div>
                    ))}; 
                    </div>
                    
                    }
                

                </Fade>
                {
                    product && (
                        <Modal isOpen={true}
                        onRequestClose={this.closeModal}>
                            <Zoom>
                                <button onClick={this.closeModal} className="close-modal">x</button>
                                <div className="poroduct-details">
                                    <img src={product.image} alt={product.title}/>
                                    <div className="poroduct-details-description">
                                        <p>
                                            <strong>{product.title}</strong>
                                        </p>
                                        <p>
                                            {product.description}
                                        </p>
                                        <p className="sizes">
                                             AvailableSizes: {"   "}
                                            {product.availableSizes.map(x => (
                                                <span key={x}> 
                                                    <button className="btn-size">
                                                    {x} {"   "}
                                                    </button>
                                                </span>
                                            ))}
                                        </p>
                                        <div className="prodouct-modal">
                                            <div>
                                                {formatCurrency(product.price)}
                                                <button 
                                                onClick={ () => { this.props.addToCart(product); this.closeModal()}} 
                                                className="cart-button">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                            
                        </Modal>
                    )
                }

            </div>



        )


    }
};
//connect accept 2 parameters, the first one is a func that acept state and return an obj that define which part of redux
// stete we are gonna use. the second param is the list of actions and the actions we are gonna use is fetchProducts the connect
// function itself returns another function, and that function accept the name of the component we are going to connect as the param
export default connect((state) => ({products: state.products.items}),{fetchProducts},)(Products)