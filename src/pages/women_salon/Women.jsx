import React from 'react'
import './women.scss'
import Salonmencard from '../../components/salonmen/Salonmencard';

import images from '../../assets/w1.png'

const Women = () => {

    const Arr2 = [
        {
          id: 1,
          name: 'anand'
        },
        {
          id: 2,
          name: 'anand'
        },
        {
          id: 3,
          name: 'anand'
        },
        {
          id: 4,
          name: 'anand'
        },
        {
          id: 5,
          name: 'anand'
        },
        {
          id: 6,
          name: 'anand'
        },
        {
          id: 7,
          name: 'anand'
        },
        {
          id: 8,
          name: 'anand'
        },
        {
          id: 9,
          name: 'anand'
        },
        {
          id: 10,
          name: 'anand'
        },
      ]


    return (
        <>
            <div className='womenCon'>Bridal</div>

            <div className='serbtn'>
                <button className='btn btn-primary serbtn'>Add New Services</button>
            </div>

        <div className='mapCon'>
        {Arr2.map((value, index) => {
          return (
            <Salonmencard
              key={value.id}
              img={images}
            />
          );
        })}
      </div>

        </>
    )
}

export default Women