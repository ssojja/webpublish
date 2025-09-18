import React from 'react';
import { useEffect, useState } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';

export function ProductList() {
    
    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3);
    
    useEffect(() => {
        const load = async () => {
            // const jsonData = await fetchData("/data/products.json");
            // setList(jsonData);

            // axios.get("/data/products.json")
            //     .then(response => console.log(response.data))
            //     .catch();

            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }, []);
    
    // console.log('list -- >', list);

    return (
        <div>            
            { rows && rows.map((rowArray, index) =>
                <div className='product-list' key={index}>
                    { rowArray && rowArray.map((product, index) => 
                        <ProductAvatar img={product.image} key={index} />
                    )}
                </div>
            )}
        </div>
    );
}