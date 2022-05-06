import React, { useState } from 'react'
import Bookingcard from '../../components/booking_card/Bookingcard'
import Footer from '../../components/footer/Footer'
import './booking.scss'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

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

    const [selectDate, setSelectDate] = useState(null);

    const getDate = (date) =>{

        console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    }

    return (
        <>

            <div className='dates'>
               <div className='dateData'>
                <DatePicker
                    selected={selectDate}
                    onChange={date => {
                        setSelectDate(date);
                        getDate(date);
                        }}
                    dateFormat='dd/MM/yyyy'
                    placeholderText='Select Booking Date'
                    minDate={new Date()}
                    className='mainDate'
                />
               </div>
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