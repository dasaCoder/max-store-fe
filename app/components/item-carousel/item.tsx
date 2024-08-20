import React from 'react';

const Item: React.FC<Item> = ({ name, price, imgUrl }) => {
    return (
        <div style={{ background: '#ffffff' }} className='border-r border-secondary'>
            <img src={imgUrl} alt={name} className='w-full' />
            <div className="flex justify-between">

                <div className='pt-4 pl-2'>
                    <h3 className='text-secondary text-md font-medium subpixel-antialiased'>{name}</h3>
                    <p className='text-dark text-lg font-bold subpixel-antialiased'>${price}</p>
                </div>
                <div className='flex items-end pb-1 pr-2'>
                    <button className="bg-dark h-max p-1">
                        <img src='/images/icons/add-to-cart.png' alt='add-to-cart' className='w-[30px]' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;