import React from 'react';
import Header from '../components/header';
import { Footer } from '../components/footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='bg-white'>
            <Header />
            {children}
            <div className="container mx-auto bg-primary">
            <Footer />
         </div>
        </div>
    );
};

export default MainLayout;