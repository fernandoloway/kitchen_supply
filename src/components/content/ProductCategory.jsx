import React, { Component } from 'react';
import { Link, Route, Router, Redirect } from "react-router-dom";

import '../../styles/category.css';
// import '../../styles/style.css';

import productJsonData from "../../json/product.json"
import categoryJsonData from "../../json/prodCategory.json"

class ProductCategory extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         data: [] // sebaiknya langsung dibuat arraynya atau string kosong untuk menghindari error pada fungsi .map karena asynchronus
    //     };
    // }

    // componentDidMount() { // yang pertama kali muncul taruh di did mount, selain itu alasannnya karena hanya akan dijalankan di client
    //     this.setState = ({ data: productJsonData })
    // };

// <link to={`/${id}`}>Produk1</Link>
    render() {

        // var idClick="1"

        // function CatchId(x){
        //     idClick=x
        //     console.log(idClick)
        // }

        // <Link to='/product/10002'>miaw</Link>
    

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
        let showList = search(this.props.idCategory)

        let searchCtg = keyword => categoryJsonData.filter(x => x.id == keyword) // == number === string

        let showCtg= searchCtg (this.props.idCategory)[0]

        let styles={
            backgroundImage: `url(${showCtg.ctgBg})`
        }
        console.log("gambar")
        console.log(styles)

        return (
            <div className="Main">

                <main role="main">

                    <section className="jumbotron text-center" style={styles}>
                        <div className="container">
                            <h1 className="jumbotron-heading">{showCtg.ctgName}</h1>
                            <p className="lead text-muted">{showCtg.ctgDesc}</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Tombol</a>
                                <a href="#" className="btn btn-secondary my-2">Tombol 2</a>
                            </p>
                        </div>
                    </section>

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


export default ProductCategory;