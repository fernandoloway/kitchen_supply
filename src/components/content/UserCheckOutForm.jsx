import React, { Component } from 'react';
import axios from 'axios';
import { Redirect }from 'react-router-dom';

export class UserCheckOutForm extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            phone:'',
            alamat:'',
            provinsi:'',
            kota:'',
            kodepos:'',
            isRequired: false,
            isFinished: false
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        var url= 'http://localhost:7000/api/checkout'
        axios.post(url, this.state)
            .then(res => {
                console.log(res.data.status==='success');
                if (res.data.status==='success'){
                    // <Redirect to='/checkout-success'/>
                    // this.props.history.push(`/checkout-success`);
                    this.setState({isFinished: true})
                }
            });
    }


    render() {

        const { name, phone, alamat, provinsi, kota, kodepos, isFinished } = this.state;

        ;

        return (
            <div className="container-fluid">

                <div className="container">
                    <div className="py-5 text-center">
                        <h2>Checkout form</h2>
                    </div>

                    <div className="row">

                        <div className="col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your orders</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">

                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">x.ProductName</h6>
                                        <small className="text-muted">x.Color (x.Size) x x.Quantity</small>
                                    </div>
                                    <span className="text-muted">Rp. x.Quantity*x.CurrPrice</span>
                                </li>


                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (IDR)</span>
                                    <strong> total</strong>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Your restaurant address</h4>
                            <form onSubmit={this.onSubmit} className="needs-validation">
                                <div className="row">
                                    <div className="col-md-12 mb-6">
                                        <label for="name">Nama Penerima</label>
                                        <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder=""  required />
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <label for="phone">Telepon</label>
                                    <input type="phone" className="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="08111234567" required />
                                </div>

                                <div className="mb-3">
                                    <label for="address">Alamat Lengkap</label>
                                    <textarea className="form-control" name="alamat" value={alamat} onChange={this.onChange} placeholder="Jalan .." required />
                                </div>

                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label for="provinsi">Provinsi</label>
                                        <input type="text" className="form-control" name="provinsi" value={provinsi} onChange={this.onChange} placeholder="" required />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="kabupaten">Kota/Kabupaten</label>
                                        <input type="text" className="form-control" name="kota" value={kota} onChange={this.onChange} placeholder="" required />

                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="zip">Kode Pos</label>
                                        <input type="text" className="form-control" name="kodepos" value={kodepos} onChange={this.onChange} placeholder="" required />
                                    </div>
                                </div>

                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Check out sekarang</button>
                            </form>
                        </div>


                    </div>

                </div>
                {isFinished && (<Redirect to='/checkout-success'/>)}

            </div>
            
        )
    }
};

export default UserCheckOutForm;
