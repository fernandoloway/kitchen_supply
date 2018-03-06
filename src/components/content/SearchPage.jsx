import React, { Component } from 'react';
import { Link, Route, Router, Redirect } from "react-router-dom";

import '../../styles/category.css';
// import '../../styles/style.css';

import productJsonData from "../../json/product.json"

class SearchPage extends Component {
 
    render() {
            
        // let search = keyword => productJsonData.filter(x => (new RegExp(keyword, 'gi')).test(x.prodName)).map((x, i) => {


        let search = keyword => productJsonData.filter(x => x.prodCtg == keyword).map((x, i) => {
                
            return (

                <div key={i} className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        {/* <Link to={`/product/${x.id}`}> */}
                        <Link to={'/product/' + x.id}>
                            <img className="card-img-top" src={x.prodImg} alt="gambar"/>
                            <div className="card-body">
                                <h5 className="card-title">{x.prodName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Rp. {x.prodPrice} / {x.prodUnit}</h6>
                            </div>
                        </Link>
                        <p className="card-text"></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Tandai</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <small className="text-muted">22 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        let showList = search(this.props.searchData)


        return (
            <div className="Main">

                <main role="main">

                    <div className="album py-5 bg-light">
                        <div className="container">

                            <div className="row">
                                {showList}
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        );
    }
}


export default SearchPage;