import React, { Component } from 'react';
import { Link } from "react-router-dom";
import poster_daging from '../assets/poster/meats.jpg';
import poster_buah from '../assets/poster/fruits.jpg';
import poster_truk from '../assets/poster/deliverytruck.jpg';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <main role="main">

                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="first-slide" src={poster_daging} alt="First slide" />
                                <div className="container">
                                    <div className="carousel-caption text-left">
                                        <h1>Uncompromised Quality Meats.</h1>
                                        <p>Meats are not created equal. We picked the best for you and your business. We have various grade of meats.</p>
                                        <p>
                                        <Link to='/category/1' className="btn btn-lg btn-primary" role="button" >Browse</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="second-slide" src={poster_buah} alt="Second slide" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1>The Freshest Fruit in Town.</h1>
                                        <p>One bad fruits could ruin your business. That's why, we are commited to only deliver the fresh ones! </p>
                                        <p>
                                            <a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="third-slide" src={poster_truk} alt="Third slide" />
                                <div className="container">
                                    <div className="carousel-caption text-right">
                                        <h1>We Deliver to Your Kitchen. Daily. Weekly. Your choice.</h1>
                                        <p>Our trucks roll everyday to fill up your kitchen. Sign up, pick what you need and tell us when to deliver.</p>
                                        <p>
                                            <a className="btn btn-lg btn-primary" href="#" role="button">Sign up now!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>


                    {/* ================================================== --> */}

                    <div className="container marketing">

                        {/* <!-- 3 kolom --> */}
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="gambar"
                                    width="140" height="140" />
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                                    cursus magna.</p>
                                <p>
                                    <a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                                </p>
                            </div>
                            {/* <!-- /.col-lg-4 --> */}
                            <div className="col-lg-4">
                                <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="gambar"
                                    width="140" height="140" />
                                <h2>Heading</h2>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                    Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
                                    mauris condimentum nibh.</p>
                                <p>
                                    <a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                                </p>
                            </div>

                            <div className="col-lg-4">
                                <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="gambar"
                                    width="140" height="140" />
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
                                    porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                    nibh, ut fermentum massa justo sit amet risus.</p>
                                <p>
                                    <a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                                </p>
                            </div>

                        </div>

                        {/* <!-- FEATURETTES --> */}

                        <hr className="featurette-divider" />

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">Ini Featurette.
                                  <span className="text-muted">Ini subheading.</span>
                                </h2>
                                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                                    commodo.
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto" data-src="" alt="gambar" />
                            </div>
                        </div>

                        <hr className="featurette-divider" />

                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading">Tulis apaaan lagi
                                  <span className="text-muted">Ini subheading</span>
                                </h2>
                                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                                    commodo.
                                </p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img className="featurette-image img-fluid mx-auto" data-src="" alt="gambar" />
                            </div>
                        </div>

                        <hr className="featurette-divider" />

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">Abis Ide
                                  <span className="text-muted">Ini subheading.</span>
                                </h2>
                                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                                    commodo.
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto" data-src="" alt="gambar" />
                            </div>
                        </div>

                        <hr className="featurette-divider" />

                        {/* <!-- /END FEATURETTES --> */}

                    </div>

                </main>

            </div>
        );
    }
}


export default Main;