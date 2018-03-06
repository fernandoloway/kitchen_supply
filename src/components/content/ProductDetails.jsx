import React, { Component } from 'react';
import { Link, Route, Router, Redirect } from "react-router-dom";

import '../../styles/productDetail.css';

import productJsonData from "../../json/product.json"

import categoryJsonData from "../../json/prodCategory.json"  


class ProductDetails extends Component {
    constructor(){
        super();
        this.state= {
            data: []
        }; 
    }

    componentDidMount() {
        this.setState ({ data: productJsonData });
    };

    render() {

        let search = keyword => productJsonData.filter(x => x.id === keyword)

        let searchCtg = keyword => categoryJsonData.filter(x => x.id == keyword)

        let detailItem=search(this.props.idDetail)[0]

        let ctgItem=searchCtg(detailItem.prodCtg)[0]


        // function CategoryMapping(categoryID) {
        //     switch (categoryID) {
        //         case "1" :
        //             return "Daging";
        //         case "2" :
        //             return "Seafood";
        //     }
        // }

        return (
            <div className="Main">

                <main role="main">

                    <div className="container">


                        <hr className="featurette-divider" />

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/Main">Beranda</Link></li>
                                <li className="breadcrumb-item"><Link to={'/category/'+ctgItem.id}>{ctgItem.ctgName}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{detailItem.prodName}</li>
                            </ol>
                        </nav>

                        <div className="row featurette">
                            <div className="col-md-5">
                                <img className="featurette-image" src={detailItem.prodImg} alt="gambar produk" />
                            </div>
                            <div className="col-md-7">
                                <h2 className="featurette-heading">{detailItem.prodName}</h2>
                                <p className="text-muted">Rp. {detailItem.prodPrice} / {detailItem.prodUnit}</p>
                                <p className="lead">{detailItem.prodDesc}</p>
                            </div>
                        </div>

                        <hr className="featurette-divider" />
                    </div>
                </main>

            </div>
        );
    }
}


export default ProductDetails;