import React from 'react'
import './editprofile.scss'

import profile from '../../assets/profile.png';

const Editprofile = (props) => {
    return (
        <>
          {props.show? 
            <div className='loginBox'>
                <button onClick={()=>props.fun(false)}>X</button>

                <p>Edit Business Profile</p>
                
                <img id='proImg' src={profile} alt="" />
                <div className='upload'>Upload Profile Picture</div>
                <input className='file' type="file" name="" id=""/>

                <section style={{ marginTop: '20px'}}>Business  Name*</section>
                <input style={{backgroundColor:' #F0F0F0'}} type="Text" name="phone" id="pass" placeholder='Enter business name' />

                <section style={{ marginTop: '15px' }}>Owner  Name*</section>
                <input style={{backgroundColor:' #F0F0F0'}} type="Text" name="phone" id="pass" placeholder='Enter owner Name' />

                <section style={{ marginTop: '15px' }}>GSTIN No.*</section>
                <input style={{backgroundColor:' #F0F0F0'}} type="Text" name="phone" id="pass" placeholder='GSTIN No.' />

                <section style={{ marginTop: '15px' }}>Email*</section>
                <input style={{backgroundColor:' #F0F0F0'}} type="email" name="phone" id="pass" placeholder='xxxxxxxx@gmail.com' />

                <div>
                    <button className='btn btn-primary'>Save Profile</button>
                </div>

            </div>:null}
        </>
    )
}

export default Editprofile