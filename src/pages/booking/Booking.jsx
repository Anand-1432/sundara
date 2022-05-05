import React from 'react'
import Bookingcard from '../../components/booking_card/Bookingcard'
import Footer from '../../components/footer/Footer'
import './booking.scss'

const Booking = () => {

    const Arr3 = [
        {
            id: 1,
            name: "anand"
        },
        {
            id: 2,
            name: "anand"
        },
        {
            id: 3,
            name: "anand"
        },
        {
            id: 4,
            name: "anand"
        },
        {
            id: 5,
            name: "anand"
        },
        {
            id: 6,
            name: "anand"
        },
        {
            id: 7,
            name: "anand"
        },
        {
            id: 8,
            name: "anand"
        },
        {
            id: 9,
            name: "anand"
        },
    ]

    return (
        <>

            <div className='dates'>
                <input type="date" name="" id="" />
            </div>

            <div className='bookingCon'>

                {Arr3.map((value, index) => {
                    return (
                        
                        <Bookingcard
                            key={value.id}
                            name={value.name}
                        />

                    );
                })}
            </div>

<Footer/>

        </>
    )
}

export default Booking