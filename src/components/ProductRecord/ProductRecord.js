import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useProduct } from "../../context/ProductProvider";

const ProductRecord = () => {
    const { allProductRecords, setAllProductRecord } = useProduct();
    let totalPrice = 0;
    const subTotal = allProductRecords.map((product) => {
        let total = product.price * product.quantity;
        totalPrice = totalPrice + total;
        return totalPrice;
    });

    const [quantity, setQuantity] = useState(false);

    const decreaseQuantity = (id) => {
        const updateQuantity = allProductRecords.find(
            (product) => product.id === id
        );

        if (updateQuantity.quantity <= 0) {
            updateQuantity.quantity = 0;
        } else {
            updateQuantity.quantity = updateQuantity.quantity - 1;
            setQuantity(!quantity);
        }
    };

    const increaseQuantity = (id) => {
        const updateQuantity = allProductRecords.find(
            (product) => product.id === id
        );
        updateQuantity.quantity = updateQuantity.quantity + 1;
        setQuantity(!quantity);
    };

    const handleDelete = (id) => {
        const deleteProductRecorder = allProductRecords.filter(
            (product) => product.id !== id
        );
        setAllProductRecord(deleteProductRecorder);
    };
    return (
        <div className='w-full ml-2'>
            {allProductRecords.map((allProductRecord) => (
                <div
                    key={allProductRecord.id}
                    className='flex items-center gap-4 text-xl font-normal text-slate-600 sm:w-90vw md:w-90vw lg:w-full'
                >
                    <BiEdit />
                    <table className='border-collapse border border-gray-400 w-90vw sm:w-90vw md:w-90vw lg:w-480 xl:w-620'>
                        <tbody>
                            <tr>
                                <td className='p-1'>
                                    <div className='flex items-center sm:gap-8 md:gap-16 lg:gap-2 xl:gap-10'>
                                        <h4 className=' w-36 sm:w-240'>
                                            {allProductRecord.name}
                                        </h4>
                                        <h4 className='w-24 sm:w-80'>
                                            ${allProductRecord.price.toFixed(2)}
                                        </h4>
                                        <div className='w-10 sm:w-20 sm:flex items-center gap-2'>
                                            <AiFillMinusCircle
                                                className=' cursor-pointer'
                                                onClick={() =>
                                                    decreaseQuantity(
                                                        allProductRecord.id
                                                    )
                                                }
                                            />
                                            <span>
                                                {allProductRecord.quantity}
                                            </span>
                                            <AiFillPlusCircle
                                                className=' cursor-pointer'
                                                onClick={() =>
                                                    increaseQuantity(
                                                        allProductRecord.id
                                                    )
                                                }
                                            />
                                        </div>
                                        <h4 className='flex justify-end w-80'>
                                            $
                                            {(
                                                allProductRecord.price *
                                                allProductRecord.quantity
                                            ).toFixed(2)}
                                        </h4>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <MdDelete
                        onClick={() => handleDelete(allProductRecord.id)}
                        className=' text-red-600 text-2xl cursor-pointer'
                    />
                </div>
            ))}
            <div className=' mt-5 flex flex-col items-end mr-4'>
                <div className='w-72'>
                    <hr className=' w-72 h-0.5 bg-slate-400 ml-auto' />
                    <div className='flex justify-between text-xl my-1'>
                        <p>Sub Total</p>
                        <p>${subTotal[subTotal.length - 1] || 0}</p>
                    </div>
                    <hr className=' w-72 h-0.5 bg-slate-400 ml-auto' />
                    <div className='flex justify-between text-xl my-1'>
                        <p>Tax</p>
                        <p>$22.50</p>
                    </div>
                    <hr className=' w-72 h-0.5 bg-slate-400 ml-auto' />
                    <div className='flex justify-between text-xl my-1'>
                        <p>Shipping</p>
                        <p>$5.50</p>
                    </div>
                    <hr className=' w-72 h-0.5 bg-slate-400 ml-auto' />
                    <div className='flex justify-between my-1'>
                        <p className=' text-sky-500 font-medium'>
                            Discount on cart
                        </p>
                        <p className=' text-xl'>$10.00</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between p-3 bg-slate-200 text-cyan-700 rounded mr-4'>
                <p>Products Count ({allProductRecords.length})</p>
                <div className=' w-72 flex justify-between text-2xl font-semibold'>
                    <h4>Total</h4>
                    <h4>${(subTotal[subTotal.length - 1] + 18).toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};

export default ProductRecord;
