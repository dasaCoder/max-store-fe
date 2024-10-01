import Link from 'next/link';
import React from 'react';

const Item: React.FC<Item> = ({ name, price, imgUrl, _id }) => {

    const [imageLoaded, setImageLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div style={{ background: '#ffffff' }} className='border-r border-secondary'>
            {!imageLoaded && (
                <div className='w-full h-60 flex items-center justify-center bg-grey-500'>
                    <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary'></div>
                </div>
            )}
            <img
                src={imgUrl}
                alt={name}
                className={`w-full ${imageLoaded ? '' : 'invisible h-0'}`}
                onLoad={handleImageLoad}
            />
            <div className="flex justify-between">
                <div className='pt-4 pl-2'>
                    <h3 className='text-secondary text-md font-medium subpixel-antialiased'>{name}</h3>
                    <p className='text-dark text-lg font-bold subpixel-antialiased'>${price}</p>
                </div>
                <div className='flex items-end pb-1 pr-2'>
                    <Link className="bg-dark h-max p-1" href={`/item/${_id}`}>
                        <img src='/images/icons/add-to-cart.png' alt='add-to-cart' className='w-[30px]' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;