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
  };
  //sortProduct function
  sortProducts = (e) => {
    //set the sort state
    const sort = e.target.value;
    //seth the sorted state
    this.setState((state) => ({
      sort : sort,
      products : this.state.products.slice().sort((a,b) =>
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
    if(e.target.value == ""){
      this.setState({size:this.state.size , product: data.products})
      //if not, filter the products based on the users selected options
    }else{
      this.setState({
        size : e.target.value,
        products : data.products.filter((product)=> (product.availableSizes.indexOf(e.target.value) >= 0))
      });
    }
  
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
              ></Filter>

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
