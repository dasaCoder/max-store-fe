'use client';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/main';
import ColorSelector from '../../components/color-selector';

const ItemPage: React.FC<any> = ({ params }: { params: { id: string } }) => {

    const [item, setItem] = useState<Item | undefined>(undefined);

    useEffect(() => {
        fetch(`http://localhost:3000/item/${params.id}`)
           .then(response => response.json())
           .then(data => setItem(data))
           .catch(error => console.log(error));
     }, []);
     
    return (
        <MainLayout>
            <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div>
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src={item?.imgUrl}
                        alt="Product"
                    />
                    <div className="flex mt-4 space-x-4">
                        
                        {item?.images?.map((url: string, index: number) => (
                            <img
                                key={index}
                                className="w-24 h-24 object-cover rounded-lg border-2 border-indigo-500"
                                src={url}
                                alt="Product"
                            />
                        ))}
                        
                    </div>
                </div>

                {/* Product Details */}
                <div className='text-dark'>
                    <h1 className="text-2xl font-bold">{item?.name}</h1>
                    <p className="text-xl font-semibold mt-2">${item?.price}</p>
                    <div className="flex items-center mt-2">
                        <div className="text-indigo-600 flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4">
                        {item?.description}
                    </p>

                    {/* <ColorSelector /> */}

                    <button
                        className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg w-full hover:bg-indigo-700 transition-colors"
                    >
                        Add to bag
                    </button>

                    <div className="mt-6 border-t border-gray-200 pt-6 space-y-6 text-gray-600">
                        <div>
                            <button className="flex justify-between w-full text-left font-medium text-gray-900">
                                Features
                                <span className="ml-6 flex items-center">+</span>
                            </button>
                        </div>
                        <div>
                            <button className="flex justify-between w-full text-left font-medium text-gray-900">
                                Care
                                <span className="ml-6 flex items-center">+</span>
                            </button>
                        </div>
                        <div>
                            <button className="flex justify-between w-full text-left font-medium text-gray-900">
                                Shipping
                                <span className="ml-6 flex items-center">+</span>
                            </button>
                        </div>
                        <div>
                            <button className="flex justify-between w-full text-left font-medium text-gray-900">
                                Returns
                                <span className="ml-6 flex items-center">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ItemPage;