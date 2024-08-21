import React, { useState } from 'react';

const ColorSelector: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState('gray');
    
    return (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">Color</h3>
          <div className="flex space-x-3 mt-2">
            <span
              onClick={() => setSelectedColor('black')}
              className={`w-8 h-8 bg-black rounded-full ${selectedColor === 'black' ? 'border-indigo-500 border-2' : 'border-white border'} cursor-pointer`}
            />
            <span
              onClick={() => setSelectedColor('white')}
              className={`w-8 h-8 bg-white rounded-full ${selectedColor === 'white' ? 'border-indigo-500 border-2' : 'border-transparent border'} cursor-pointer`}
            />
            <span
              onClick={() => setSelectedColor('gray')}
              className={`w-9 h-9 bg-indigo-500 rounded-full ${selectedColor === 'gray' ? 'border-indigo-500 border-2' : 'border-white border'} cursor-pointer`}
            >
                <span className="w-8 h-8 bg-indigo-500 border-4 border-white rounded-full inline-block"></span>
                </span>
            
          </div>
        </div>
    );
};

export default ColorSelector;