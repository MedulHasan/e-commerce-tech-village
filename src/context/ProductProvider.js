import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
    const [allProductRecords, setAllProductRecord] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch("./fakeProductRecorde.json")
            .then((res) => res.json())
            .then((data) => setAllProductRecord(data));
    }, []);

    const contextValue = {
        allProductRecords,
        setAllProductRecord,
        searchInput,
        setSearchInput,
    };
    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
