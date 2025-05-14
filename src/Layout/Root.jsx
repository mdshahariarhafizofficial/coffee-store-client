import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header>
                <div className='max-w-[1320px] mx-auto'>

                </div>
            </header>
            <main>
                <div className='max-w-[1320px] mx-auto'>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <div className='max-w-[1320px] mx-auto'>
                    
                </div>
            </footer>
        </div>
    );
};

export default Root;