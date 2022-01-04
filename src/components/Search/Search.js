import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBarcodeReader } from "react-icons/bi";

const Search = () => {
    return (
        <div className=' p-4 bg-white shadow-2xl flex justify-between items-center w-full text-2xl'>
            <div className=' flex items-center gap-4'>
                <AiOutlineSearch className=' text-gray-600 font-bold' />
                <input
                    className=' text-gray-400 focus:outline-none'
                    placeholder='Search Products...'
                ></input>
            </div>
            <BiBarcodeReader />
        </div>
    );
};

export default Search;
