import React, { Component } from 'react';

import { Link, Route, Router, Redirect } from "react-router-dom";

import logo from '../assets/logo_transparent/1x/Artboard 1mdpi.png';
import icon_meats from '../assets/meats.png';
import icon_fish from '../assets/fish.png';
import icon_sayur from '../assets/vegetable.png';
import icon_buah from '../assets/fruits.png';
import icon_grain from '../assets/Grain.png';
import icon_milk from '../assets/milk.png';
import icon_coffee from '../assets/coffee.png';
import icon_cart from '../assets/cart.png';


class Header extends Component {

    // constructor(){
    //     super();
    //     this.state= {searchKey: ""};
    // }

    handleSearch= (e) => {
        e.preventDefault();
        let keyword= this.refs.inputKeyword.value;
        this.props.onSearch(keyword);
    }


    render() {

        return (
            <div className="Header">

                <header>
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light" id="navbar">
                        <a className="navbar-brand" href="#"><Link to="/Main">
                            <img src={logo} width="350px" /></Link>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto mx-auto">
                                <li className="nav-item">
                                <Link to='/category/1'>
                                    <a className="nav-link">
                                        <img src={icon_meats} height="25px"/> Daging</a></Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/category/2'>
                                    <a className="nav-link">
                                        <img src={icon_fish} height="20px" /> Seafood</a>
                                </Link>        
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={icon_sayur} height="25px" /> Sayuran & Kacang</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={icon_buah} height="25px" /> Buah</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={icon_grain} height="25px" /> Biji-bijian</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={icon_milk} height="25px" /> Susu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={icon_coffee} height="25px" /> Kopi & Teh</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Kebutuhan Lainnya</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                                        <a className="dropdown-item" href="#">Roti</a>
                                        <a className="dropdown-item" href="#">Tepung & Mentega</a>
                                        <a className="dropdown-item" href="#">Gula & Garam</a>
                                        <a className="dropdown-item" href="#">Coklat</a>
                                        <a className="dropdown-item" href="#">Keju</a>
                                        <a className="dropdown-item" href="#">Es Batu Kristal</a>
                                        <a className="dropdown-item" href="#">Air Mineral Galon</a>
                                        <a className="dropdown-item" href="#">Cup & Sedotan</a>
                                        <a className="dropdown-item" href="#">Styrofoam</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline mt-2 mt-md-0">
                                <input className="form-control mr-sm-2" type="text" ref="inputKeyword" placeholder="Restoran saya butuh .." aria-label="Search" />
                                
                                {/* <button className="btn btn-outline-success my-2 my-sm-0" >Cari</button> */}
                                <Link to="/SearchPage" onClick={() => this.handleSearch()} className="btn btn-outline-success">Cari</Link>
                            </form>
  
                            <button type="button" className="btn btn-info ml-0 ml-md-2 mt-2 mt-md-0">
                                <img src={icon_cart} height="20px" />
                                <span className="badge" id="cart-badge" >0 </span>
                            </button>
                            <button type="button" className="btn btn-primary ml-0 ml-md-2 mt-2 mt-md-0">Sign in</button>
                        </div>
                    </nav>

              
                </header>



            </div>
        );
    }
}


export default Header;