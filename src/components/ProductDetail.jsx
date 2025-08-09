import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({cart, setCart}) => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
        // console.log(filterProduct);
        setProduct(filterProduct[0]);

        const relatedProducts = items.filter((p) => p.category === product.category);
        setRelatedProducts()
        setRelatedProducts(relatedProducts)
    }, [id, product.category])

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
            <div className="container con" >
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>
                <div className="text-center text-color-black">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">
                        {product.description}
                    </p>
                     <button
                                                onClick={() => addToCart(Product.id, Product.price, Product.title, Product.description, Product.imgSrc)}
                                                className="btn btn-warning">Add To Cart</button>
                    
                </div>
            </div>
            <h1 className="text-center">Related Items</h1>
            <Product cart={cart} setCart={setCart} items={relatedProducts}/>
        </>
    )
}
export default ProductDetail;