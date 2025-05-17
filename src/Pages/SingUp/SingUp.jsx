import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const SingUp = () => {

    const {createUser} = useContext(AuthContext);

    // handle create user
    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const {password, ...userProfile} = Object.fromEntries(formData.entries());
        console.log(userProfile);
        
        // Create User
        createUser(email, password)
        .then( (result) => {
            console.log(result);
            
        } )
        .catch( (error) => {
            console.log(error);
        } )
    }

    return (
        <div className='flex items-center justify-center my-10'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-[#F4F3F0] dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Sing Up Now!</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
                </p>

                {/* GOOGLE */}
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Sing Up with Google</p>
                    </button>

                </div>

                <div className="flex items-center w-full my-4">
                    <hr  className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr  className="w-full dark:text-gray-600" />
                </div>

                {/* Form */}
                <form onSubmit={handleCreateUser}
                className="space-y-8">
                    <div className="space-y-4">

                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* Address */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Address</label>
                            <input type="text" name="address" id="address" placeholder="Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Phone Number</label>
                            <input type="text" name="number" id="number" placeholder="Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* Photo Url */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Photo URL</label>
                            <input type="txt" name="photo" id="photo" placeholder="Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>

                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                </form>

            </div>
        </div>
    );
};

export default SingUp;