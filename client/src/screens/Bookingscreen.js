import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Bookingscreen() {
    const {roomid} = useParams();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState()
    const [room, setroom] = useState();

    useEffect(() => {
        async function fetchRooms() {
            try {
                setloading(true)
                const data = (await axios.post('/api/rooms/getroombyid', { roomid })).data;


                setroom(data)
                setloading(false)
            } catch (error) {
                seterror(true)
                console.log(error);
                setloading(false)
            }
        }
        fetchRooms();
    }, []);
    return (

        <div className='m-5'>
            
           {loading? (<Loader/>) : room ? (<div>
                <div className='row justify-content-center mt-5 bs'>
                    {/* image margin css */}
                    <div className='col-md-6'>      
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className = "bigimg"/>
                    </div>
                    <div className='col-md-6'>
                    <div style={{textAlign:'right'}}>
                        <h1>Booking Detail</h1>
                        <hr/>
                        
                        <b>
                        <p>Name : </p>
                        <p>From date :</p>
                        <p>To date :</p> 
                        <p>Max Count : {room.maxcount}</p> 
                        </b>
                        </div>
                        <div style={{textAlign:'right'}}>
                            <b>
                            <h1>Amount</h1>
                            <hr/>
                            <p>Total days : </p>
                            <p>Rent per day : {room.rentperday}</p>
                            <p>Total amount : </p>
                            </b>
                        </div>
                        <div style={{float : 'right'}}>
                            <button className = 'btn btn-primary'>Pay Now</button>
                        </div>
                    </div>
                </div>

           </div>) : (<Error/>)}
        </div>
    );
}

export default Bookingscreen