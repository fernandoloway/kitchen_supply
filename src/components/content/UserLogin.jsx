import React, { Component } from 'react';
import '../../styles/UserLogin.css';
import { Link, Redirect } from 'react-router-dom';
import validateInput from '../../utility/loginValidator';
import { connect } from 'react-redux';
import { authUserLogin } from '../../actions/userAuthAction';
import PropTypes from 'prop-types';

class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            identifier:'',
            password: '',
            errors: {},
            isLoading: false,
            redirectToReferrer: false
        };

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
    }

    // cek input valid dengan function validateInput
    // isValid() {
    //     const { errors, isValid } = validateInput(this.state);
    //     if (!isValid){
    //         this.setState({ errors });
    //     }
    //     return isValid;
    // }

    onSubmit(e){
        e.preventDefault();
        // if (this.isValid()){
        //     this.setState({
        //         errors:{},
        //         isLoading: true
        //     });
            // panggil action
            this.props.authUserLogin(this.state).then(
                (res) => this.setState({redirectToReferrer:true}),
                (err) => this.setState({errors: err.response.data.errors, isLoading: false})
            );
        // }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        // deconstruct state
        const {errors, identifier, password, isLoading, redirectToReferrer} = this.state;

        if (redirectToReferrer === true){
            return (
                <Redirect to='/' />
            )
        }

        return (
            <div className="row">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="mb-4">
                        <h2 className="h3 mb-3 font-weight-normal">Silahkan Login</h2>
                    </div>

                   

                    <div className="form-label-group">
                        <input type="text" id="identifier" name="identifier" onChange={this.onChange} className="form-control" placeholder="Email or username" required="" autoFocus="" error={errors.identifier} value={identifier}/>
                        <label htmlFor="identifier">Email or Username</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="password" name="password" onChange={this.onChange} className="form-control" placeholder="Password" required="" error={errors.password} value={password}/>
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Ingat saya
                        </label>
                    </div>
                    { errors.form && <div className="alert alert-danger mt-2">{errors.form}</div>}
                    <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isLoading}>Sign in</button>

                    <p className="mt-5 mb-3 text-muted text-center">Belum punya akun? <Link to='/signup'>Daftar disini..</Link></p>
                </form>
            </div>
        )
    }
}

UserLogin.propTypes = {
    authUserLogin: PropTypes.func.isRequired
}

UserLogin.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, { authUserLogin })(UserLogin);
