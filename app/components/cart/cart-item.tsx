import { CartItem } from '@/app/lib/features/cart/cart-slice';
import React from 'react';

interface CartItemProps {
    cartItem: CartItem;
}

const CartItemPlaceholder: React.FC<CartItemProps> = ({ cartItem }) => {
    return (
        <li key={cartItem.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    alt={cartItem.imgUrl}
                    src={cartItem.imgUrl}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={'#'}>{cartItem.name}</a>
                        </h3>
                        <p className="ml-4">{cartItem.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">LKR {cartItem.price}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {cartItem.quantity}</p>

                    <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItemPlaceholder;