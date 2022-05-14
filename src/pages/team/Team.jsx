import React from 'react'
import Footer from '../../components/footer/Footer'
import './team.scss'

import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.png'
import e3 from '../../assets/e3.jpg'

const Team = () => {
    return (
        <>
            <div className='teamCon'>Our Team Member</div>

            <div className='serbtn'>
                <button className='btn btn-primary serbtn'>Add New Team</button>
            </div>

            <h2 className='h2'>Our Expert Team</h2>
            <div className='team'>
                <div className=' content'>
                    <img id='img' src={e1} alt="" />
                    <h5>Pooja</h5>
                    <p id='p1'>Make-Up</p>
                </div>

                <div className='content'>
                    <img id='img' src={e2} alt="" />
                    <h5>Paras</h5>
                    <p id='p1'>Hair Care</p>
                </div>

                <div id='img' className='content'>
                    <img id='img' src={e3} alt="" />
                    <h5>Ritik</h5>
                    <p id='p1'>Skin Care</p>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Team