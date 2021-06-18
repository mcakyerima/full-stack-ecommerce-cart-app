import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json"
class App extends React.Component {

  //create a cusntrocutor for our App Class component and set initial states
  constructor() {
    super();
    this.state = {
      products : data.products,
      size : "",
      sort: ""

    };
  }
  //sortProduct function
  sortProducts(event){
    console.log(event.target.value)
  }

  //filterProducts funtion than filter by size
  filterProducts(e){
    console.log(e.target.value)
  }

  render(){
    
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
              />

              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">Cart Items</div>
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
