import React from 'react'
import Salonmencard from '../../components/salonmen/Salonmencard';
import './men.scss';
import images from '../../assets/men1.png'
import Footer from '../../components/footer/Footer';


const Men = () => {

  const Arr1 = [
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
      <div className='salonCon'>Hair Cut</div>

      <div className='serbtn'>
        <button className='btn btn-primary serbtn'>Add New Services</button>
      </div>

      <div className='mapCon'>
        {Arr1.map((value, index) => {
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
  )
}

export default Men