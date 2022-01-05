import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useProduct } from "../../context/ProductProvider";

const Product = () => {
    const { allProductRecords, setAllProductRecord, searchInput } =
        useProduct();
    const [products, setProducts] = useState([]);
    const searchProduct = products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    useEffect(() => {
        fetch("./fakeProduct.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const updateProduct = {
            id: uuid(),
            name: product.name,
            price: product.price,
            quantity: 1,
        };
        const updateProductRecord = [...allProductRecords, updateProduct];
        setAllProductRecord(updateProductRecord);
    };
    return (
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 sm:gap-4'>
            {searchProduct.length === 0 ? (
                <p className=' mt-5 w-40 text-red-600'>Product Not Available</p>
            ) : (
                searchProduct.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleAddToCart(product)}
                        className=' w-100 h-100 sm:h-56 md:h-56 lg:w-32 xl:w-36 border-2 rounded border-gray-400 text-center cursor-pointer'
                    >
                        <img src={product.img} alt='' />
                        <p>${product.price}</p>
                        <hr className=' h-0.5 bg-gray-300' />
                        <p>{product.name}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Product;
