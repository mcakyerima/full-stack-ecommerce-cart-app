import React, { Component } from 'react'
import formatCurrency from './utilities'


export default class Products extends Component {

    render() {

        return (
            <div className="section">
                { this.props.products.map((product) => (

                    <div key={product._id} className="container">
                        <div className="card">
                            <div className={`imageBox ${product.category === "dress" ? "shirts" : "shoes"}`}>
                                <img src={product.image} />
                                <h2>{product.title}</h2>
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
                                    <a href="#">Buy Now</a>
                                </div>
                        </div>
                    </div>
                ))};

            </div>



        )


    }
}