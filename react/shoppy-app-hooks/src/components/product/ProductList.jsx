import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    const { createProduct } = useProduct();
    const { productList } = useContext(ProductContext);
    const [number, setNumber] = useState(3);
    
    useEffect(() => {
        // 1. createProduct
        createProduct(number);
    }, [number]);

    return (
        <div>            
            { productList && productList.map((rowArray, index) =>
                    <div className='product-list' key={index}>
                    { rowArray && rowArray.map((product, idx) =>
                        <Link to={`/products/${product.pid}`}>
                            <ProductAvatar img={product.image} key={idx} />
                        </Link> 
                    )}
                </div>
            )}
        </div>
    );
}