import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, photo, price, coffeeName, chef, supplier, category, details } = coffee;
    // console.log(coffee);
    
    // Update Coffee
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        // console.log(updateCoffee);

        // Update Coffee
        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log("After Update : ", data);
            
        })
        
    }

    return (
        <div>
            <Link to="/">Back to Home</Link>

            <div className='mt-12 mx-5 lg:mx-0 mb-30 bg-[#F4F3F0] py-16 px-10 md:px-28 rounded-lg'>
                {/* Text */}
                <div className='text-center space-y-7 mb-6'>           
                    <h2 className='text-5xl font-bold text-center text-[#331A15] text-shadow-lg/40 text-shadow-[#374151]'>Update Coffee</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid md:grid-cols-2 gap-6'>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" defaultValue={coffeeName} name='coffeeName' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee name" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Chef</label>
                        <input type="text" defaultValue={chef} name='chef' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee chef" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Supplier</label>
                        <input type="text" defaultValue={supplier} name='supplier' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee supplier" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Price</label>
                        <input type="text" defaultValue={price} name='price' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee Price" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Category</label>
                        <input type="text" defaultValue={category} name='category' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee Category" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Details</label>
                        <input type="text" defaultValue={details} name='details' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee details" />
                        </fieldset>

                    </div>

                        <fieldset className="fieldset my-6">
                        <label className="label text-xl font-semibold">Photo Url</label>
                        <input type="text" defaultValue={photo} name='photo' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter photo URL" />
                        </fieldset>

                        <button type='submit' className="btn bg-[#D2B48C] text-[#331A15] border-2 border-[#331A15] text-xl font-semibold btn-block">Update Coffee</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;