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
              <Filter count={this.state.products.length}/>
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
