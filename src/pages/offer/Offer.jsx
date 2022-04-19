import React from 'react'
import Footer from '../../components/footer/Footer'
import './offer.scss'

import Salonmencard from '../../components/salonmen/Salonmencard';
import images from '../../assets/ofimg.png'

const Offer = () => {

    const Off = [
        {
            id: 1,
            name: 'anand'
        },
        {
            id: 2,
            name: 'anand'
        },
        {
            id: 2,
            name: 'anand'
        },
        {
            id: 2,
            name: 'anand'
        },
    ]

    return (
        <>
            <div className='offer'>
                <div className='blogCon'>Best Offers</div>

                <div className='serbtn'>
                    <button className='btn btn-primary serbtn'>Add New Offer</button>
                </div>
            </div>

            <div className='offCon'>
                {Off.map((value, index) => {
                    return (
                        <Salonmencard
                            key={value.id}
                            img={images}
                        />
                    );
                })}
            </div>

            <Footer />
        </>
    );
}

export default Offer