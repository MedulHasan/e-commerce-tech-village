import React from "react";
import { ImCancelCircle } from "react-icons/im";
import {
    FaHandRock,
    FaHandHoldingUsd,
    FaHandHoldingMedical,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='flex gap-1 sm:gap-5 m-2 items-center'>
                <div className='flex items-center gap-1 sm:gap-6 bg-red-200 p-2 text-xl sm:text-2xl rounded text-red-700'>
                    <ImCancelCircle />
                    <p className='font-medium'>Cancel</p>
                </div>
                <div className='flex items-center gap-1 sm:gap-6 bg-slate-200 p-2 text-xl sm:text-2xl rounded text-cyan-700'>
                    <FaHandRock />
                    <p className='font-medium'>Hold</p>
                </div>
                <div className='flex items-center gap-1 sm:gap-6 bg-slate-200 p-2 text-xl sm:text-2xl rounded text-cyan-700'>
                    <FaHandHoldingMedical />
                    <p className='font-medium'>Discount</p>
                </div>
                <div className='flex items-center gap-1 sm:gap-6 bg-slate-200 p-2 text-xl sm:text-2xl rounded text-cyan-700'>
                    <FaHandHoldingUsd />
                    <p className='font-medium'>Pay Now</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
