import React from "react";
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
          <a href="/">Mc Fresh Store</a>
          <a className="admin" href="/admin">Admin</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
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
