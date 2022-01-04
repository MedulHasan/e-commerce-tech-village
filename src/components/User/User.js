import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";

const User = () => {
    return (
        <div className='m-5 flex items-center justify-between bg-slate-200 text-cyan-700 p-3 rounded text-2xl'>
            <div className='flex items-center gap-3'>
                <HiUserCircle />
                <h5>Steve Jobs</h5>
            </div>
            <FiPlusCircle />
        </div>
    );
};

export default User;
