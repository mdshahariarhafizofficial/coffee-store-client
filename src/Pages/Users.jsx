import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUser = useLoaderData();
    const [users, setUsers] = useState(initialUser);
    // console.log(initialUser);
    
    const handleDelete = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/users/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log("After Delete : ", data);
                if (data.deletedCount) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success",
                    timer: 15000,
                    });
                    const remainingUsers = users.filter( user => user._id !== id );
                    setUsers(remainingUsers)
                }
            })

        }
        });
    }
    return (
        <div>
            <h2>Total User: {users.length}</h2>
            <Link to='/'>Go to home</Link>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            No.
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map( (user, index) => 
                    <tr key={user._id}>
                        <th>
                        <label>
                            {
                                index+1
                            }
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={user.photo}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <h2 className="font-bold text-xl">{user.name}</h2>
                            </div>
                        </div>
                        </td>
                        <td>
                            {
                                user.email
                            }
                        </td>
                        <td>Purple</td>
                        <th className=''>
                            <div className="join space-x-3">
                                <button className="btn join-item">
                                    <FaEye size={20} color='Green'></FaEye>
                                </button>
                                <button className="btn join-item">
                                    <IoPencil size={20} color='blue'></IoPencil>
                                </button>
                                <button onClick={() => handleDelete(user._id)} className="btn join-item">
                                    <MdOutlineDeleteForever size={20} color='red'></MdOutlineDeleteForever>
                                </button>
                            </div>
                        </th>
                    </tr>
                        )
                    }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Users;