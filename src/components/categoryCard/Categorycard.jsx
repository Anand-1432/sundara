import React from 'react'
import './categorycard.scss';

import r2 from '../../assets/cat1.png'

const Categorycard = (props) => {
    return (
        <>
            <div className='categoryCard'>
             <img src={r2} alt="" />
             <p>{props.title}</p>
             <button className='btn btn-primary'>Edit</button>
             <button className='btn btn-dark'>Delete</button>
            </div>
        </>
    )
}

export default Categorycard