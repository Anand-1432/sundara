import React from 'react'
import Footer from '../../components/footer/Footer'
import "./salonHome.scss"

import banner2 from '../../assets/banner2.png'
import profile from '../../assets/profile.png';

const SalonHome = () => {
    return (
        <>
            <div className='salonHome'>
                <div className='salonCon'>Lackme Salon</div>
                <div className='btnCon'>
                    <button className='btn bt1'>Lackme Services</button>
                    <button className='btn bt2'>other information</button>
                </div>

                <div className='mainData container-fluid'>
                    <div className='row'>
                        <div className='col-8 salonData'>
                            <img id='banner' src={banner2} alt="" />
                            <h5>Lackme Salon</h5>
                            <p>Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor,
                                Tatya Tope Nagar, Nagpur, Maharashtra 440015</p>
                            <div className='proSection'>
                                <img src={profile} alt="" />
                                <section>Steve Smith</section>
                                <p>stevesmithexaple@gmail.com</p>
                            </div>
                        </div>

                        <div className='col-4'></div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SalonHome