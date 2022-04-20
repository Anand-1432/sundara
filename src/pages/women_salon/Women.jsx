import React from 'react'
import './women.scss'

import Footer from '../../components/footer/Footer';
import Salonwomen from '../../components/salonwomen/Salonwomen';

const Women = () => {

  const Arr2 = [
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
      <div className='womenCon'>Bridal</div>

      <div className='serbtn'>
        <button className='btn btn-primary serbtn'>Add New Services</button>
      </div>

      <div className='mapCon'>
        {Arr2.map((value, index) => {
          return (
            <Salonwomen
              key={value.id}
              title={value.title}
              img={value.img}
              data={value.data}
            />
          );
        })}
      </div>

      <Footer />
    </>
  )
}

export default Women