import React from "react";
import { VscMenu } from "react-icons/vsc";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiBehold } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";

const Menu = () => {
    return (
        <div>
            <div className='flex gap-1 sm:gap-5 m-5 items-center'>
                <VscMenu className='text-3xl' />
                <div className='flex items-center gap-2 bg-slate-200 py-1 px-2 text-md sm:text-xl rounded text-cyan-700'>
                    <FaRegStickyNote />
                    <p className='font-medium'>Note</p>
                </div>
                <div className='flex items-center gap-2 bg-slate-200 py-1 px-2 text-md sm:text-xl rounded text-cyan-700'>
                    <MdOutlineLocalShipping />
                    <p className='font-medium'>Shipping</p>
                </div>
                <div className='flex items-center gap-2 bg-slate-200 py-1 px-2 text-md sm:text-xl rounded text-cyan-700'>
                    <GiBehold />
                    <p className='font-medium'>Hold Order</p>
                </div>
                <div className='flex items-center gap-2 bg-slate-200 py-1 px-2 text-md sm:text-xl rounded text-cyan-700'>
                    <AiFillPlusCircle />
                    <p className='font-medium'>New Item</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
