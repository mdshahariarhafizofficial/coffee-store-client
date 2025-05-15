import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee);

    const { _id, photo, price, coffeeName, chef, supplier, category, details } = coffee;
    
    return (
        <div className='px-5 lg:px-0'>
            <Link to="/">Back to Home</Link>

            <div className="card my-10 py-16 bg-[#F4F3F0] flex justify-center items-center shadow-sm">
            <div className='flex flex-col md:flex-row items-center gap-10'>
                <figure className='w-[250px]'>
                    <img
                    src={photo}
                    className='w-full'
                    alt="coffee" />
                </figure>
                <div className="card-body">
                    <h2 className='text-5xl font-bold text-center text-[#331A15] text-shadow-lg/40 text-shadow-[#374151]'>{coffeeName}</h2>
                    <h2 className="card-title">{supplier}</h2>
                    <p className='flex items-center gap-2'>
                        <span className="card-title">Chef : </span>
                         {chef}</p>
                    <p className='flex items-center gap-2'>
                        <span className="card-title">Category : </span>
                         {category}</p>
                    <p className='flex items-center gap-2'>
                        <span className="card-title">Details : </span>
                         {details}</p>
                    <p className='flex items-center gap-2'>
                        <span className="card-title">Chef : </span>
                         {chef}</p>
                    <h2 className="card-title text-3xl">Price :  ${price}</h2>
                </div>
            </div>
            </div>

        </div>
    );
};

export default CoffeeDetails;