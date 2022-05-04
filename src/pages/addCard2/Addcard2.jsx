import React from 'react'
import Footer from '../../components/footer/Footer'
import './addcard2.scss'

import men from '../../assets/men1.png'
import { Link } from 'react-router-dom'

const Addcard2 = () => {
    return (
        <>

          <div></div>


            <div className='container addcard2'>
                <div className='row'>
                    <div className='col-lg-3 col-xl-3 imgsection'>
                        <img src={men} alt="" />
                    </div>
                    <div className='col-lg-6 col-xl-6'>
                        <h5 className='mt-2'>Quiff</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus, perferendis facere ipsa odit id, laborum illum
                        </p>
                        <h6>Lakme Salon</h6>
                    </div>
                    <div className='col-lg-3 col-xl-3 datasection'>
                      <p>$500</p>
                      <button className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            </div>

            <div className='container addcard2'>
                <div className='row'>
                    <div className='col-lg-3 col-xl-3 imgsection'>
                        <img src={men} alt="" />
                    </div>
                    <div className='col-lg-6 col-xl-6'>
                        <h5 className='mt-2'>Quiff</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus, perferendis facere ipsa odit id, laborum illum
                        </p>
                        <h6>Lakme Salon</h6>
                    </div>
                    <div className='col-lg-3 col-xl-3 datasection'>
                      <p>$500</p>
                      <button className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            </div>

            <div className='container addcard2'>
                <div className='row'>
                    <div className='col-lg-3 col-xl-3 imgsection'>
                        <img src={men} alt="" />
                    </div>
                    <div className='col-lg-6 col-xl-6'>
                        <h5 className='mt-2'>Quiff</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus, perferendis facere ipsa odit id, laborum illum
                        </p>
                        <h6>Lakme Salon</h6>
                    </div>
                    <div className='col-lg-3 col-xl-3 datasection'>
                      <p>$500</p>
                      <button className='btn'>Delete</button>
                    </div>
                </div>
            </div>

            <div className='continue'>
                <p>Total Amount = $9000</p>
                <Link to='/schedule' className='btn'>continue</Link>
            </div>

            <Footer />
        </>
    )
}

export default Addcard2