import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Usercart = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    


    const uid1 = localStorage.getItem('uid1');
    const productid1 = localStorage.getItem('prodid1');
    const productitle1 = localStorage.getItem('prodtitle1');
    const productprice1 = localStorage.getItem('prodprice1');



    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // productid: productid1,
                productitle: productitle1,
                productprice: productprice1,
                // leavesInHand: 18,
                // leaveStart: inputs.leaveStart,
                // leaveEnd: inputs.leaveEnd,
                // leaveType: inputs.leaveType,
                // reason: inputs.reason,
                // leaveStatus: "pending",
            })
        };
        fetch('http://localhost:58355/api/Products', requestOptions)
            .then(response => response.json())
            .then(data => setSubmit(data.id));

        alert("The item added.");
        // navigate('/Product');

    }

    return (
<>

            <div className="container">
                <h2>{uid1}  your cart contains </h2>
            </div>
        <div className="card mx-2 my-3" style={{ width: 300, height: 350 }}>
            <img src=".." className="card-img-top" alt="..." />
            <div className="card-body">
                {/* <p className="card-text"> onChange={handleChange} value={productid1}</p> */}
                <h5 className="card-title"> <p>{productitle1}</p></h5>
               
                <p>Cost of the product is {productprice1}</p>

                <p className="card-text"> </p>
                {/* <a href="/" className="btn btn-primary mx-1">Add to Cart</a> <a href="/" className="btn btn-primary ">Buy Now</a> */}
                {/* <Link to="/placeorder">
                  <button type="button" onClick={() => setProdor(item.productid,item.producttitle, item.productprice)} class="btn btn-outline-success btn-sm">Buy Now</button>
                  </Link> */}
            </div>
            </div>
            </>
    );

};
    


export default Usercart;