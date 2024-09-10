'use client';
import MainLayout from '@/app/layouts/main';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchResultComponent: React.FC<any> = ({params}: {params: {keyword: string}}) => {
    const router = useRouter();
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/item/search?keyword=${params.keyword}`)
            .then(response => setItems(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <MainLayout>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {items.map((product) => (
                            <a key={product._id} href="#" className="group" onClick={() => router.push(`/item/${product._id}`)}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt={product.name}
                                        src={product.imgUrl}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">LKR {product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SearchResultComponent;