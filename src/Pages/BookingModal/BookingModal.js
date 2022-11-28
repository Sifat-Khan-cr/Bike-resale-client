import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ bike }) => {
    const notify = () => toast('Here is your toast.');
    const { user } = useContext(AuthContext);
    const { productName, location, askingPrice, _id, sellerName, booked } = bike;
    const handleBooking = () => {
        if (booked) {
            // console.log("booked")
            toast.success("Already booked")
            return;

        } else {
            fetch(`https://sifat-bikes-server.vercel.app/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("booking Successfull")

                    }
                });
        }



    }

    return (
        <div>
            <input type="checkbox" id="bike-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{productName}</h3>
                    <p className="py-1">Seller name : {sellerName}</p>
                    <p className="py-1">Asking Price : ${askingPrice}</p>
                    <p className="py-1">Meeting Location : {location}</p>
                    <p className="py-1">Product Id : {_id}</p>
                    <p className="py-1">Booking Name : {user?.displayName}</p>
                    <p className="py-1">Booking Email : {user?.email}</p>
                    <div className="modal-action">
                        <label htmlFor="bike-modal" onClick={handleBooking} className="btn btn-primary">{booked ? "Already Booked" : "Book It now!!"}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;