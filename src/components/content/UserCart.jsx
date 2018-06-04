import React, { Component } from 'react';
import axios from 'axios';
import dateToString from '../../utility/convertDateToString';
import { Link } from 'react-router-dom';

export class UserCart extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }


    fetchData(){
        var url = 'http://localhost:7000/api/usercart/'
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                this.setState({ cart: res.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    // onChange(e){
    //     this.setState({ [e.target.name] : e.target.value })
    // }

    // onChange(e){
    //     this.setState(prevState => ({
    //         cart: {
    //             ...prevState.cart,
    //             quantity: e.target.value
    //         }
    //     }))
    // }

    onChange(key){
        var stateCopy = Object.assign({}, this.state);
        stateCopy.cart = stateCopy.cart.slice();
        stateCopy.cart[key] = Object.assign({}, stateCopy.cart[key]);
        stateCopy.cart[key].quantity += 1;
        this.setState(stateCopy);
    }
    

    onSubmit(e){
        e.preventDefault();
        // var url= 'http://localhost:7000/api/usercart'
        // axios.post(url, {quantity: this.state.quantity, productId: this.state.product.id, deliveryDate: this.state.deliveryDate})
    }

    removeCart(id){
        var url = 'http://localhost:7000/api/usercart/'+id
        axios.delete(url)
            .then(() => {
                this.fetchData()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { cart } = this.state;

        var dateMin = dateToString(new Date(), 'YYYY-MM-DD', 2);

        var total=0

        const showCart = cart.map((x, i) => {
            total+=x.quantity*x.price
            return (
                <tr key={x.cart_id}>
                    <td> {x.product_name} </td>
                    <td> {x.vendor_name} </td>
                    <td> {x.price}</td>
                    <td>
                        <input type="date" className="form-control" name="cart.deliver_date" min={dateMin} value={x.deliver_date.split('T')[0]}  disabled />
                    </td>
                    <td>
                        <input type="hidden" value={x.cart_id} name="cartId" />
                        {/* <input type="number" className="form-control" value={x.quantity} name="quantity" max={x.stock} min={x.minimum} onChange={(e)=>this.onChange(i)} disabled/> */}
                        {x.quantity}
                    </td>
                    <td>{x.stock_unit}</td>
                    <td>{x.stock}
                    {(x.stock-x.quantity>=0) ? <span className="badge badge-pill badge-info float-right align-middle">OK</span> : 
                    <span className="badge badge-pill badge-danger float-right align-middle"> N/A </span> }
                    </td>

                    <td>{x.quantity*x.price}</td>
                    <td><button className="btn btn-outline-primary btn-sm" >Edit </button></td>
                    <td><button className="btn btn-outline-danger btn-sm" onClick={()=>this.removeCart(x.cart_id)} >Hapus </button></td>

                </tr>
                
            )
        })

        return (
            <div className="container-fluid" style={{paddingTop:"2rem"}}>

                <main className="col-sm-9 col-md-11 pt-3">
                    <h2>Cart :</h2>&nbsp;
                    

                        <table className="table table-condensed">
                            <thead>
                                <tr>
                                    <th className="col-sm-12 col-md-2">Product Name</th>
                                    <th className="col-sm-12 col-md-2">Vendor</th>
                                    <th className="col-sm-12 col-md-1">Price</th>
                                    <th className="col-sm-12 col-md-1">Supply Date</th>
                                    <th className="col-sm-12 col-md-1">Quantity</th>
                                    <th className="col-sm-12 col-md-1">Unit</th>
                                    <th className="col-sm-12 col-md-1">Stocks</th>
                                    <th className="col-sm-12 col-md-1">Subtotal</th>
                                    <th className="col-sm-12 col-md-1" colSpan='2'></th>
                                </tr>
                            </thead>
                            <tbody>

                            {showCart}

                                <tr>
                                    <td colSpan="6"></td>

                                    <td style={{ textAlign: "right" }}>Total: (IDR)</td>
                                    <td>{total}</td>
                                    <td colSpan="2"></td>
                                </tr>

                            </tbody>
                        </table>


                        <button className="btn btn-secondary" type="button" >Batal</button>
                        <Link to="/checkout" className="btn btn-primary ml-1" type="button" >Next    </Link>

                    
                </main>


            </div>
        )
    }
}

export default UserCart;
