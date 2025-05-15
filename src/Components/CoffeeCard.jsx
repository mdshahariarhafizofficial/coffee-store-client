import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import { MdDelete, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const { _id, photo, price, coffeeName, chef } = coffee;
    
    // Delete
    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
        if (result.isConfirmed) {
            // Delete
            fetch(`http://localhost:3000/coffees/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log("After delete :",data);
                if (data.deletedCount) {
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                        });
                }
            })

        }
        });

    }


    return (
        <div>
            <div className="h-[300px] card flex flex-row items-center justify-between bg-[#F5F4F1] shadow-sm py-8 px-5 md:px-8">
                <figure>
                    <img
                    src= {photo}
                    alt="coffee" />
                </figure>
                <div className="card-body">
                    <div className='text-left'>
                        <h2 className="card-title">{coffeeName}</h2>
                        <p>{chef}</p>
                        <h3>$ {price}</h3>
                    </div>
                </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical lg:join-horizontal lg:space-x-4 space-y-4">
                            <Link to={`/coffee-details/${_id}`}>
                                <button className="btn rounded-sm join-item bg-[#dda760]">
                                    <FaEye size={20} color='white'></FaEye>
                                </button>
                            </Link>
                            <Link to={`/update-coffee/${_id}`}>
                                <button className="btn rounded-sm bg-black join-item">
                                    <IoPencil size={20} color='white'></IoPencil>
                                </button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn rounded-sm bg-red-500 join-item">
                                <MdDeleteForever size={20} color='white'></MdDeleteForever>
                            </button>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default CoffeeCard;