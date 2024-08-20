import React from 'react';

const Item: React.FC<CategoryItem> = ({ name, imgUrl, }) => {
    return (
        <div className={`border-r border-secondary bg-peach text-center h-[350px] bg-cover content-center`} style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="flex flex-col backdrop-grayscale">
                <div className='pt-4 pl-2 ≈'>
                    <h3 className='text-white text-3xl font-medium subpixel-antialiased font-mono drop-shadow'>{name}</h3>
                </div>
                <div className=''>
                    <button className="h-max p-1">
                        <img src='/images/icons/go-btn.png' alt='go-btn' className='w-[50px]' />
                    </button>
                </div>
            </div>
            {/* <img src={imgUrl} alt={name} className='w-full backdrop-opacity-10 backdrop-invert' /> */}
        </div>
    );
};

export default Item;