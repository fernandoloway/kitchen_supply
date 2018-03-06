import React, { Component } from 'react';

// import './App.css';

import './styles/style.css';

import { Link, Route, Router, Redirect } from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProductCategory from './components/content/ProductCategory';
import ProductDetails from './components/content/ProductDetails';
import SearchPage from './components/content/SearchPage';


class App extends Component {
    constructor(){
      super();
      this.state= {searchKey: ""
    };
  }

  search = (keyword) => {
    this.setState ({searchKey: keyword})
  }

  render() {
    return (
      <div class="container-fluid" id="outerWrapper">
        <Header onSearch={this.search}/> 

        <Route path= "/" render = {()=> <Redirect to="/Main"/>}/>
        <Route path="/Main" component={Main} />

        {/* <Route path="/ProductCategory" component={ProductCategory} /> */}
        <Route path='/category/:ctgId' render={({match}) => {
          return <ProductCategory idCategory={match.params.ctgId}/>
        }}/>

        {/* <Route path="/ProductDetails" component={ProductDetails} /> */}
        <Route path='/product/:id' render={({match}) => {
          return <ProductDetails idDetail={match.params.id}/>
        }}/>


        <Route path="/SearchPage" render={() => <SearchPage searchData={this.state.searchKey}/>}/>

        <Footer />
                    
      </div>
    )
  }
}


export default App;
