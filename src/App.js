import React, { Component } from 'react';

import { Link, Route } from "react-router-dom";



import './App.css';

// import './styles/style.css';



import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductCategory from './components/content/ProductCategory';
import ProductDetails from './components/content/ProductDetails';
import SearchPage from './components/content/SearchPage';
import PageNotFound from './components/content/PageNotFound';
import UserLogin  from './components/content/UserLogin';
import UserRegister from './components/content/UserRegister';
import { UserCart } from './components/content/UserCart';
import { UserCheckOutForm } from './components/content/UserCheckOutForm';
import { UserCheckOutSuccess } from './components/content/UserCheckOutSuccess';



class App extends Component {
  constructor() {
    super();
    this.state = {
      searchKey: ""
    };
  }

  search = (keyword) => {
    this.setState({ searchKey: keyword })
  }


  render() {
    return (
      <div className="container-fluid" id="outerWrapper">
        <Header onSearch={this.search} />

        <Route path="/" exact component={Main} />

        <Route path='/category/:ctgId' render={({ match }) => {
            return <ProductCategory idCategory={match.params.ctgId} />
          }} />


        <Route path='/product/:id' render={({ match }) => {
            return <ProductDetails idProduct={match.params.id} />
          }} />

        <Route path="/login" exact component={UserLogin} />
        <Route path="/signup" exact component={UserRegister} />
        <Route path="/cart" exact component={UserCart}/>
        <Route path='/checkout' exact component={UserCheckOutForm}/>
        <Route path='/checkout-success' exact component={UserCheckOutSuccess}/>


        {/* <Route path="/SearchPage" render={() => <SearchPage searchData={this.state.searchKey}/>}/> */}

        <Footer />

      </div>
    )
  }
}


export default App;
