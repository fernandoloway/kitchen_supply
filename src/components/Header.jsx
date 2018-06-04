import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogout } from '../actions/userAuthAction';

import logo from '../assets/logo_transparent/1x/Artboard 1mdpi.png';
import icon_meats from '../assets/meats.png';
import icon_fish from '../assets/fish.png';
import icon_sayur from '../assets/vegetable.png';
import icon_buah from '../assets/fruits.png';
import icon_grain from '../assets/Grain.png';
import icon_milk from '../assets/milk.png';
import icon_coffee from '../assets/coffee.png';
import icon_cart from '../assets/cart.png';

import { TiShoppingCart, TiZoomOutline } from 'react-icons/lib/ti';

class Header extends Component {

    // constructor(){
    //     super();
    //     this.state= {searchKey: ""};
    // }

    handleSearch = (e) => {
        e.preventDefault();
        let keyword = this.refs.inputKeyword.value;
        this.props.onSearch(keyword);
    }


    userLogout(e) {
        e.preventDefault();
        this.props.userLogout();
    }

    render() {

        // desctructure props
        const { userIsAuthenticated } = this.props.userAuth;
        // console.log(this.props.userAuthReducer)

        const userLinks = (
            <button type="button" onClick={this.userLogout.bind(this)} className="btn btn-outline-danger ml-0 ml-md-2 mt-2 mt-md-0">Log Out</button>
        );

        const guestLinks = (
            <Link to='/login' type="button" className="btn btn-outline-primary ml-0 ml-md-2 mt-2 mt-md-0">Sign In</Link>
        );

        return (
            <div className="row Header">

                <header>
                    <nav className="navbar navbar-default"></nav>
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light" id="navbar">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="350px" /></Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto mx-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/category/1'>
                                        <img src={icon_meats} height="25px" /> Daging
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/category/2'>
                                        <img src={icon_fish} height="20px" /> Seafood
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/3">
                                        <img src={icon_sayur} height="25px" /> Sayuran & Kacang</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/4">
                                        <img src={icon_buah} height="25px" /> Buah</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/5">
                                        <img src={icon_grain} height="25px" /> Biji-bijian</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/6">
                                        <img src={icon_milk} height="25px" /> Susu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/7">
                                        <img src={icon_coffee} height="25px" /> Kopi & Teh</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Kebutuhan Lainnya</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                                        <NavLink className="dropdown-item" to="/category/8" exact>Roti</NavLink>
                                        <NavLink className="dropdown-item" to="/category/9">Tepung & Mentega</NavLink>
                                        <NavLink className="dropdown-item" to="/category/10">Gula & Garam</NavLink>
                                        <NavLink className="dropdown-item" to="/category/11">Coklat</NavLink>
                                        <NavLink className="dropdown-item" to="/category/12">Keju</NavLink>
                                        <NavLink className="dropdown-item" to="/category/13">Es Batu Kristal</NavLink>
                                        <NavLink className="dropdown-item" to="/category/14">Air Mineral Galon</NavLink>
                                        <NavLink className="dropdown-item" to="/category/15">Cup & Sedotan</NavLink>
                                        <NavLink className="dropdown-item" to="/category/16">Styrofoam</NavLink>
                                    </div>
                                </li>
                            </ul>

                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="butuh supply .." />
                                <div className="input-group-append">
                                    <button className="btn btn-dark" type="button"><TiZoomOutline/></button>
                                </div>
                            </div>

                            {/* <form className="form-inline mt-2 mt-md-0">
                                <input className="form-control mr-sm-2" type="text" ref="inputKeyword" placeholder="Restoran saya butuh .." aria-label="Search" />
                                 */}
                            {/* <button className="btn btn-outline-success my-2 my-sm-0" >Cari</button> */}
                            {/* <Link to="/SearchPage" onClick={() => this.handleSearch()} className="btn btn-outline-success">Cari</Link> */}
                            {/* </form> */}

                            <Link to="/cart" type="button" className="btn btn-info ml-0 ml-md-2 mt-2 mt-md-0">
                                <TiShoppingCart/>
                                <span className="badge badge-light">9</span>
                            </Link>

                            {userIsAuthenticated ? userLinks : guestLinks}
                        </div>
                    </nav>


                </header>



            </div>
        );
    }
}

Header.propTypes = {
    userAuth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired
}

// function mapStateToProps(state){
//     return {
//         userAuthReducer: state.userAuthReducer
//     };
// }

const mapStateToProps = state => ({
    userAuth: state.userAuth
})

export default connect(mapStateToProps, { userLogout })(Header);