import React, {useState} from 'react';
import './index.css';


const App = () => {

    const [product, setproduct] = useState('')
    const [quantity, setquantity] = useState('')
    const [count, setCount] = useState([])
   

    const deleteData = (e, index1) => {
        setCount([...count.filter((item, index) => index !== index1)])
    }
    
    const todo = (event) => {
        event.preventDefault();
        let productData = {
            Product: product,
            Quantity: quantity
        }
        setCount([...count, productData])
        setproduct("")
        setquantity("")
    }


    return (
        <>
            <div className="container-fluid">
                <form className="d-flex">
                    <input value={product} onChange={(e)=>setproduct(e.target.value)} className="form-control1 me-2 p-3" type="search" placeholder="Enter product name" aria-label="Search" />
                    <input value={quantity} onChange={(e)=>setquantity(e.target.value)} className="form-control2 me-2 p-3" type="search" placeholder="Enter quantity" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" onClick={(e) => todo(e)}>Add to cart</button>
                </form>
            </div>
            <table className="table">
                <thead>
                    <tr className="tr">
                        <th scope="col">S.No</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {count && count.map((item, index) => 
                            (
                                <tr key={index}>
                                    <th id="data" className="p-4" scope="row">{index + 1}</th>
                                    <td id="data" className="p-4">{item.Product}</td>
                                    <td id="data" className="p-4">{item.Quantity}</td>
                                    <td id="data" className="data p-4"><button className="btn btn-outline-danger" onClick={(e) => deleteData(e, index)}>delete</button></td>
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </>
    )
}

export default App;