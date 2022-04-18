import React from 'react'
import './card.scss'

import s1 from '../../assets/s1.png'

const Card = () => {
  return (
    <div className='container  CardContanier'>
       <div className='row'>
           <div className='col-lg-6 col-xl-6'>
               <img src={s1} alt="" />
           </div>
           <div className='col-lg-6 col-xl-6'>
               <h4>Amrut Salon</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum 
               inventore aliquam ad rerum, voluptas temporibus dolores at facere </p>
           </div>
       </div>
    </div>
  )
}

export default Card