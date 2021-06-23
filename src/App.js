import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart"
import data from "./data.json"
class App extends React.Component {

  //create a cusntrocutor for our App Class component and set initial states
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: ""

    };
  };

  //create add to cart function to add products to cart... this func checks if product exist then increments it
  // if not exist? it then adds the product to basket and set a bolean alreadyInCart to false

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice()
    let alreadyInCart = false
    cartItems.forEach((item) => {
      if (item._id == product._id) {
        item.count++
        alreadyInCart = true
      }
    })
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({cartItems})
  }

  //sortProduct function
  sortProducts = (e) => {
    //set the sort state
    const sort = e.target.value;
    //set the sorted state
    this.setState((state) => ({
      sort: sort,
      //use products.slice() to copy the products state and sort it
      products: this.state.products.slice().sort((a, b) =>
        sort === "lowest" ?
          a.price > b.price
            ? 1
            : -1
          : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
              ? 1
              : -1
      )
    }))
  };

  //filterProducts funtion than filter by size
  filterProducts = (e) => {
    //check if event is empty then render the entire products
    if (e.target.value == "") {
      this.setState({ size: this.state.size, product: data.products })
      //if not, filter the products based on the users selected options
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter((product) => (product.availableSizes.indexOf(e.target.value) >= 0))
      });
    }

  }

  render() {

    return (
      <div className="parent-container">
        <div className="grid-container">
          <header>
            <h2><a href="/">Mc Fresh Store</a></h2>
            <a className="admin" href="/admin">Admin</a>
          </header>
          <main>
            <div className="contents">
              <div className="main">
                <Filter count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                ></Filter>

                <Products products={this.state.products} addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart cartItems={this.state.cartItems} />
              </div>
            </div>
          </main>

          <footer>
            Made with 💓 by Mc Ak Yerima
          </footer>
        </div>
      </div>

    );
  }

}

export default App;
