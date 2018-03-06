import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div className="Footer">

                <footer className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>&copy; 2017-2018 KitchenSupply, Inc. &middot;
                <a href="#">About us </a> &middot;
                <a href="#">Contact</a>
                    </p>
                </footer>

            </div>
        );
    }
}


export default Footer;