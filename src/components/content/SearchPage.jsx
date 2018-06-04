// import React, { Component } from 'react';
// import { Link, Route, Router, Redirect } from "react-router-dom";

// import '../../styles/category.css';
// // import '../../styles/style.css';

// import productJsonData from "../../json/product.json"
// import categoryJsonData from "../../json/prodCategory.json"
// import register from '../../registerServiceWorker';

// class SearchPage extends Component {

//     render() {

//         let search= this.props.searchData

//         console.log("test")
//         console.log(search)


//         let search = keyword => productJsonData.filter(x => x.prodCtg == keyword).map((x, i) => {
            
//             return (
//                 <div key={i} class="col-md-4">
//                     <div class="card mb-4 box-shadow">
//                         {/* <Link to={`/product/${x.id}`}> */}
//                         <Link to={'/product/' + x.id}>
//                             <img class="card-img-top" src={x.prodImg} alt="gambar"/>
//                             <div class="card-body">
//                                 <h5 class="card-title">{x.prodName}</h5>
//                                 <h6 class="card-subtitle mb-2 text-muted">Rp. {x.prodPrice} / {x.prodUnit}</h6>
//                             </div>
//                         </Link>
//                         <p class="card-text"></p>
//                         <div class="d-flex justify-content-between align-items-center">
//                             <div class="btn-group">
//                                 <button type="button" class="btn btn-sm btn-outline-secondary">Tandai</button>
//                                 <button type="button" class="btn btn-sm btn-outline-secondary">Beli</button>
//                                 <small class="text-muted">22 mins</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         })
//         let showList = search(this.props.idCategory)


//         return (
//             <div className="Main">

//                 <main role="main">

//                     <div class="album py-5 bg-light">
//                         <div class="container">

//                             <div class="row">
//                                 {showList}
//                             </div>
//                         </div>
//                     </div>

//                 </main>

//             </div>
//         );
//     }
// }

// export default SearchPage;