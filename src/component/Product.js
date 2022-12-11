// import React from 'react';
// import c2 from './../images/c2.jpg';

// export default function Product() {
//   return (
//     <>
//     <div className='container my-3'>
//       <h4>Products we own........</h4>
//     </div>
//     <div className="conatiner  col-500 mx-3 text-center ">
//     <div className='row'>
//     <div className="card" style={{width:300,height:350}}>
//   <img src={c2} className="card-img-top" alt="..."/>
//   <div className="card-body mx-1">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a>
    
//   </div>
//   </div>
  

// <div className="card" style={{width:300,height:350}}>
//   <img src={c2} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a>
    
//   </div>
//   </div>


//   <div className="card" style={{width:300,height:350}}>
//   <img src={c2} className="card-img-top" alt="..."/>
//   <div className="card-body mx-1">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a>
    
//   </div>
//   </div>



//   <div className="card" style={{width:300,height:350}}>
//   <img src={c2} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a>
    
//   </div>
//   </div>




//   <div className="card" style={{width:300,height:350}}>
//   <img src={c2} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a>
    
//   </div>
//   </div>



//   <div className="card" style={{width:300,height:350}}>
//   <img src={c2} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a>
    
//   </div>
//   </div>

//   </div>
// </div>
//   </>
//   )
// }


import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sg from './../images/sg.jpg';
 

const Product = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  




  const setProdor = (productid,producttitle,productprice) => {
    // console.log(productid);


    localStorage.setItem("prodid1", productid);
    localStorage.setItem("prodtitle1", producttitle);
    localStorage.setItem("prodprice1", productprice);
}

 

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:58355/api/Products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

 

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
          <div className='row'>
             
                




{/* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect  Engineer</p>
  </div>
</div> */}
            {/* <table>
              <tbody > */}
                
                {items.map(item=> (
                  

               
                  <div className="card mx-2 my-3" style={{width:300,height:550}}>
                    <img src={sg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p className="card-text"> {item.productid}</p>
                  <h5 className="card-title"> {item.producttitle} </h5>
                  <p className="card-text"> {item.producttext}</p>
                  <p className="card-text"> {item.productprice}</p>
                  {/* <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a> */}
                  <Link to="/Usercart/">
                  <button type="button" onClick={() => setProdor(item.productid,item.producttitle, item.productprice)} class="btn btn-outline-success btn-sm">Buy Now</button>
                  </Link>
                 </div>
                  </div>
                  
                
                 
                    
                    // <tr >
                    //   <th scope="row">
                    //                 {item.productid}
                    //             </th>
                  
                    // <td  >
                    //     {item.producttitle} 
                    // </td>
                    // <td  >
                        
                    //     {item.producttext}
                    // </td>
                    // <td  >
                    //   {item.productprice}
                    // </td>
                    // </tr>

                      ))}
                   {/* </tbody>
                
            </table> */}
           
            </div>
            
          
        );
    }
};

 

export default Product;
