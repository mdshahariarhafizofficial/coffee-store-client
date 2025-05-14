import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photo.value;

        const newCoffee = { coffeeName, chef, supplier, taste, category, details, photoUrl }

        console.log(newCoffee);
        
    }

    return (
        <div>
            <div className='mt-12 mx-5 lg:mx-0 mb-30 bg-[#F4F3F0] py-16 px-10 md:px-28 rounded-lg'>
                {/* Text */}
                <div className='text-center space-y-7 mb-6'>           
                    <h2 className='text-5xl font-bold text-center text-[#331A15] text-shadow-lg/40 text-shadow-[#374151]'>Add New Coffee</h2>
                    <p className='max-w-[820px] mx-auto leading-7'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleAddCoffee}>
                    <div className='grid md:grid-cols-2 gap-6'>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='coffeeName' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee name" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Chef</label>
                        <input type="text" name='chef' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee chef" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Supplier</label>
                        <input type="text" name='supplier' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee supplier" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Taste</label>
                        <input type="text" name='taste' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee taste" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Category</label>
                        <input type="text" name='category' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee Category" />
                        </fieldset>

                        <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Details</label>
                        <input type="text" name='details' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter coffee details" />
                        </fieldset>

                    </div>

                        <fieldset className="fieldset my-6">
                        <label className="label text-xl font-semibold">Photo Url</label>
                        <input type="text" name='photo' className="input w-full border-0 focus:outline-0 focus:shadow-lg focus:shadow-[#D2B48C60]" placeholder="Enter photo URL" />
                        </fieldset>

                        <button type='submit' className="btn bg-[#D2B48C] text-[#331A15] border-2 border-[#331A15] text-xl font-semibold btn-block">Add Coffee</button>
                </form>

            </div>
        </div>
    );
};

export default AddCoffee;