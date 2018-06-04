import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';


import '../../styles/ProductDetails.css';
import { TiLocationOutline } from 'react-icons/lib/ti';
import dateToString from '../../utility/convertDateToString';

class ProductDetails extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            quantity: '',
            errors: {},
            deliveryDate: dateToString(new Date(), 'YYYY-MM-DD', 2),
            needLogin: false,
            message: '',
            status: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    fetchData(id) {
        var url = 'http://localhost:7000/api/product/' + id;
        axios.get(url)
            .then((res) => {
                this.setState({ product: res.data.data })
                this.setState({ quantity: res.data.data.minimum })
                // console.log(this.state.product)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        var url = 'http://localhost:7000/api/usercart'
        axios.post(url, { quantity: this.state.quantity, productId: this.state.product.id, deliveryDate: this.state.deliveryDate })
            .then(res => {
                console.log(res)

                this.setState({ message: res.data.message })
                this.setState({ status: res.data.status })

            })
            .catch((err) => {
                console.log(err)
                this.setState({ needLogin: true })
            })
    }

    componentDidMount() {
        this.fetchData(this.props.idProduct)
    };

    render() {

        // let searchCtg = keyword => categoryJsonData.filter(x => x.id == keyword)

        const { quantity, errors, product, deliveryDate, needLogin, status } = this.state;

        var dateMin = dateToString(new Date(), 'YYYY-MM-DD', 2);

        return (
            <div className="Main">

                <main role="main">

                    <div className="container" id="containerProductDetail">


                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Beranda</Link></li>
                                <li className="breadcrumb-item"><Link to={'/category/' + product.ctg_id}>{product.cat_name}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{product.product_name}</li>
                            </ol>
                        </nav>

                        <div className="row featurette">
                            <div className="col-md-5">
                                <img className="featurette-image" src={product.prod_image_url} alt="gambar produk" />

                            </div>
                            <div className="col-md-7">
                                <h2 className="featurette-heading">{product.product_name}</h2>
                                <p className="text-muted">Rp. {product.price} / {product.stock_unit}</p>

                                <p className="lead">{product.product_description}</p>
                                <div className="d-flex flex-row justify-content-end align-items-start">
                                    <div>
                                        <small className="text-muted" style={{ fontSize: "70%" }}>{product.vendor_name}&nbsp; | </small>
                                    </div>
                                    <div className="ml-2">
                                        <TiLocationOutline />
                                        <small className="text-muted" style={{ fontSize: "70%" }}>{product.city} </small>
                                    </div>
                                </div>

                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-3">

                                            <label>Quantity:</label>
                                            <div className="input-group">

                                                <input type="number" className="form-control" aria-label="quantity" id="quantity" name="quantity" min={product.minimum} step={product.step} placeholder={product.minimum} value={quantity} onChange={this.onChange} error={errors.quantity} required />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">{product.stock_unit}</span>
                                                </div>
                                            </div>
                                            <small className="text-muted"> (min: {product.minimum})</small>

                                        </div>

                                        <div className="form-group col-md-4">

                                            <label>Supply Date:</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">tgl.</span>
                                                </div>
                                                <input type="date" className="form-control" name="deliveryDate" min={dateMin} value={deliveryDate} onChange={this.onChange} required />
                                            </div>
                                            <small className="text-muted"> (min: 2 hari)</small>

                                        </div>


                                    </div>
                                    <div className="row">
                                        {this.state.status==='success' ?
                                            <div className="col-md-9">
                                                <div className="alert alert-success">
                                                    {this.state.message}
                                            </div>
                                            </div>
                                        : this.state.status==='error' ?
                                            <div className="col-md-9">
                                                <div className="alert alert-danger">
                                                    {this.state.message}
                                                </div>
                                            </div>
                                        : null
                                        }

                                        <div className="col-md-9">
                                            <button className="btn btn-outline-primary btn-block" type="submit" >+ Add to Cart</button>
                                        </div>

                                    </div>




                                </form>


                            </div>

                        </div>

                    </div>
                </main>

                {needLogin && <Redirect to='/Login' />}

            </div>
        );
    }
}


export default ProductDetails;