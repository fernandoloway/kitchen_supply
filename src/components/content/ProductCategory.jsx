import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import '../../styles/ProductCategory.css';
import { TiLocationOutline, TiBookmark } from 'react-icons/lib/ti';


class ProductCategory extends Component {
    constructor(){
        super();
        this.state={products:[], category:{}}
    }

    fetchData(id){
        var url='http://localhost:7000/api/product/cat/'+id;
        axios.get(url)
            .then((res) => {
                this.setState({products: res.data.products, category: res.data.category})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount(){
        this.fetchData(this.props.idCategory)
    }

    componentWillReceiveProps(newProps){
        const currentId = this.props.idCategory
        const nextId = newProps.idCategory
    
        if (currentId !== nextId) {
            this.fetchData(nextId)
        }
    }
 
    render() {

        var showList = this.state.products.map(x => {
            return (
                
                <div className="col-md-4" key={x.id}>
                    <div className="card mb-4 box-shadow">
                        <Link to={'/product/'+x.id}>
                        <img className="card-img-top" alt="No Image" style={{height: "225px", width: "100%", display: "block"}} src={x.prod_image_url} data-holder-rendered="true"/>
                        </Link>   
                        <div className="card-body">
                            <h5 className="card-title">{x.product_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Rp. {x.price} / {x.stock_unit}</h6>
                            
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary"><TiBookmark /></button>
                                </div>

                                <div className="d-flex flex-column justify-content-end align-items-end">
                                    <small className="text-muted" style={{fontSize:"70%"}}>{x.vendor_name} </small>
                                    <div>
                                        <TiLocationOutline />
                                        <small className="text-muted" style={{fontSize:"70%"}}>{x.city} </small>
                                    </div>
                                </div>  
                            </div>

                        </div>
                    </div>
                </div>

            )
        })



        // let searchCtg = keyword => categoryJsonData.filter(x => x.id == keyword) // == number === string

        // let showCtg= searchCtg (this.props.idCategory)[0]

        let styles={
            backgroundImage: `url(${this.state.category.cat_bg_img_url})`
        }

        return (
            <div className="Main">

                <main role="main">

                    <section className="jumbotron text-center" style={styles}>
                        <div className="container">
                            <h1 className="jumbotron-heading">{this.state.category.cat_name}</h1>
                            <p className="lead text-muted">{this.state.category.cat_desc}</p>
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

        // let search = keyword => productJsonData.filter(x => x.prodCtg == keyword).map((x, i) => {
            
        //     return (

        //     )
        // })
        // let showList = search(this.props.idCategory)