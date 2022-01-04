import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const Category = () => {
    const allCategory = [
        "Electronics",
        "Home & Lifestyle",
        "Men Fashion",
        "Women Fashion",
    ];

    return (
        <div className=' flex items-center gap-1 mb-4'>
            <p className=' px-3 py-1 border-2 border-cyan-700 rounded-md bg-white text-cyan-700 font-semibold text-xs sm:text-sm lg:text-10px xl:text-lg 2xl:text-lg'>
                All Category
            </p>
            {allCategory.map((category, index) => (
                <p
                    key={index}
                    className=' px-3 py-1 border-2 border-gray-400 rounded-md bg-white text-black text-xs sm:text-sm lg:text-10px xl:text-lg 2xl:text-lg'
                >
                    {category}
                </p>
            ))}
            <FiMoreVertical className=' text-3xl' />
        </div>
    );
};

export default Category;
