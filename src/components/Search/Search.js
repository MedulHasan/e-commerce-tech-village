import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBarcodeReader } from "react-icons/bi";
import { useProduct } from "../../context/ProductProvider";

const Search = () => {
    const { setSearchInput } = useProduct();
    return (
        <div className=' p-4 bg-white shadow-2xl flex justify-between items-center w-full text-2xl'>
            <div className=' flex items-center gap-4'>
                <AiOutlineSearch className=' text-gray-600 font-bold' />
                <input
                    className=' text-gray-400 focus:outline-none'
                    placeholder='Search Products...'
                    onChange={(e) => setSearchInput(e.target.value)}
                ></input>
            </div>
            <BiBarcodeReader />
        </div>
    );
};

export default Search;
