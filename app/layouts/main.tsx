'use client';
import React from 'react';
import Header from '../components/header';
import { Footer } from '../components/footer';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='bg-white'>
            <Header />
            <div>
                {children}
            </div>
            <div className="bg-gray-900">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;