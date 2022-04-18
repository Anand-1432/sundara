import React from 'react'
import './bookingcard.scss'
import im from '../../assets/b1.png'

import MoreVertIcon from '@material-ui/icons/MoreVert';

const Bookingcard = (props) => {
  return (
     <>
         <div className='cardBody'>
         <img src={im} alt="" />
             <p>
             {props.name} <br />
             07D1234
             </p>
             <section>
                $ 900 <MoreVertIcon/>
             </section>

             <div className='ser'>Services</div>
             <div>
                 <button className='btn btn-light'>Hair color</button>
                 <button className='btn btn-light'>Body Massage</button>
                 <button className='btn btn-light'>Shaving</button>
                 <button className='btn btn-light'>Hair Cut</button>
             </div>

             <div className='tim'>Time <span>Afternoon 3:00 pm</span></div>
         </div>
     </>
  )
}

export default Bookingcard