import React, { useState } from 'react'
import './men.scss';

import Salonmencard from '../../components/salonmen/Salonmencard';
import Editservices from '../../components/editservices/Editservices';
import Footer from '../../components/footer/Footer';

import notfound from '../../assets/notfound.png'


const Men = () => {

  const [edit, setedit] = useState(false);

  const Arr1 = [
    {
      id: 1,
      title: 'Hair color off 20%',
      img: 'https://picsum.photos/seed/picsum/500/300',
      data: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 2,
      title: 'Hair color off 20%',
      img: 'https://picsum.photos/seed/picsum/500/300',
      data: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 3,
      title: 'Hair color off 20%',
      img: 'https://picsum.photos/seed/picsum/500/300',
      data: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 4,
      title: 'Hair color off 20%',
      img: 'https://picsum.photos/seed/picsum/500/300',
      data: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ]

  return (
    <>

      {edit ? <Editservices img={notfound} fun={setedit} /> : null}

      <div className='salonCon'>Hair Cut</div>

      <div className='serbtn'>
        <button className='btn btn-primary serbtn' onClick={() => { setedit(true) }}>Add New Services</button>
      </div>

      <div className='mapCon'>
        {Arr1.map((value, index) => {
          return (
            <Salonmencard
              key={value.id}
              img={value.img}
              title={value.title}
              data={value.data}
            />
          );
        })}
      </div>

      <Footer />

    </>
  )
}

export default Men