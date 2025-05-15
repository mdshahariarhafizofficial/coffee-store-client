import React from 'react';
import CoffeeCard from './CoffeeCard';

const Coffees = ({data}) => {
    console.log(data);
    
    return (
        <div>
                <div className='text-center space-y-7 mb-6'>           
                    <h2 className='text-5xl font-bold text-center text-[#331A15] text-shadow-lg/40 text-shadow-[#374151]'>Our Popular Products</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-5 lg:px-0'>
                        {
                            data.map(coffee => <CoffeeCard 
                                key={coffee._id}
                                coffee = {coffee}
                            
                            ></CoffeeCard> )
                        }
                    </div>

                </div>
        </div>
    );
};

export default Coffees;