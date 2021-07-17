import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data.json";
import store from './store';
import { Provider } from "react-redux";
class App extends React.Component {

  //create a cusntrocutor for our App Class component and set initial states
  constructor() {
    super();
    this.state = {
      products: data.products,
      //if cartItem in localstorage, get it else set as empty array
      cartItems: localStorage.getItem("cartItems")  ?  JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: ""

    };
  };

  //create add to cart function to add products to cart... this func checks if product exist then increments it
  // if not exist? it then adds the product to basket and set a bolean alreadyInCart to false
  //remove item to cart
  removeFromCart = (product) => {
    //create an instance of cart item
    const cartItems = this.state.cartItems.slice()
    //filter through cartItems and return items._id that are not equal product._id which returns a new array without the selected items
    this.setState({ cartItems:cartItems.filter((x)=> x._id !== product._id)})
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));

  }

  addToCart = (product) => {
    //create a copy of cartItems
    const cartItems = this.state.cartItems.slice()
    //create a variable for keeping track of item existance
    let alreadyInCart = false
    //loop through and check if item exist then increment count by one, else add the product to cart
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    })
    //if item not already in cart? push it and set count to 1
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    //update the state of cartItems
    this.setState({cartItems});
    // make cartItems persistent after refresh by adding to local storage
    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
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
    if (e.target.value === "") {
      this.setState({ size: this.state.size, product: data.products })
      //if not, filter the products based on the users selected options
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter((product) => (product.availableSizes.indexOf(e.target.value) >= 0))
      });
    }

  }

  createOrder = (order) => {
    alert(`order recieved for ${order.name}`)
  }

  render() {

    return (
      <Provider store={store}>
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
                <Cart cartItems={this.state.cartItems} 
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}/>
              </div>
            </div>
          </main>

          <footer>
            Made with 💓 by Mc Ak Yerima
          </footer>
        </div>
      </div>
      </Provider>

    );
  }

}

export default App;
