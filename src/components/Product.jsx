import React from "react";
// import { items } from "./Data";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj]);
        toast.success('🦄 Item has been added to cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            // progress: ,
            theme: "dark",
            // transition: Bounce,
        });
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                // transition={Bounce}
            />
            <div className="container my-5">
                <div className="row">
                    {items.map((Product, index) => {
                        return (
                            <>
                                <div key={Product.id} className="col-lg-4 col-md-6 my-3 text-center">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <Link to={`/product/${Product.id}`} style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }
                                        }>
                                            <img src={Product.imgSrc} className="card-img-top" alt="..." /></Link>

                                        <div className="card-body">
                                            <h5 className="card-title">{Product.title}</h5>
                                            <p className="card-text">
                                                {Product.description}
                                            </p>
                                            <button className="btn btn-primary mx-3">Rs.{Product.price}</button>
                                            <button
                                                onClick={() => addToCart(Product.id, Product.price, Product.title, Product.description, Product.imgSrc)}
                                                className="btn btn-warning">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Product;
