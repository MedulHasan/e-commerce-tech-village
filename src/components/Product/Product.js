import React, { useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./fakeProduct.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 sm:gap-4'>
            {products.map((product) => (
                <div
                    key={product.id}
                    className=' w-100 h-100 sm:h-56 md:h-56 lg:w-32 xl:w-36 border-2 rounded border-gray-400 text-center'
                >
                    <img src={product.img} alt='' />
                    <p>${product.price}</p>
                    <hr className=' h-0.5 bg-gray-300' />
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Product;
