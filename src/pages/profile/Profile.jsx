import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import './profile.scss'

import profile from '../../assets/profile.png';
import pro1 from '../../assets/pro1.png';
import pro2 from '../../assets/pro2.png';
import pro3 from '../../assets/pro3.png';

import LockIcon from '@material-ui/icons/Lock';
import Editprofile from '../../components/editprofile/Editprofile';
import Bookhistory from '../../components/booking_history/Bookhistory';
import Terms from '../../components/terms&conditions/Terms';
import Privacy from '../../components/privacypolicy/Privacy';
import Passpop from '../../components/Password_popup/Passpop';

const Profile = () => {

    const [edit, setedit] = useState(false);

    const [book, setbook] = useState(true);
    const [term, setterm] = useState(false);
    const [policy, setpolicy] = useState(false);

    const [pop, setpop] = useState(false);

    return (
        <>

            <Editprofile
                show={edit}
                fun={setedit}
            />
        

            <div className='proCon'></div>
            <div className='container proData'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 data'>
                        <img src={profile} alt="" srcset="" />
                        <div className='p'>
                            Steve Smith <br />
                            <span id='id'>Steveexample@gmail.com</span> <br />
                           <button id='change' onClick={()=>setpop(true)}><LockIcon fontSize='small' /> Change password</button>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 edit'>
                        <button className='btn btn-primary'>Logout</button>
                        <button className='btn btn-dark' onClick={() => setedit(true)}>Edit business profile</button>
                    </div>
                </div>
            </div>

            <div className='conatiner conditions'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <button id='button'
                            onClick={() => {
                                setbook(true);
                                setpolicy(false);
                                setterm(false);
                            }}>

                            <div className='box'>
                                <img src={pro1} alt="" />
                                <p>Booking History</p>
                            </div>
                        </button>
                    </div>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <button id='button'>
                            <div className='box' onClick={() => {
                                setbook(false);
                                setpolicy(false);
                                setterm(true);
                            }}>
                                <img src={pro2} alt="" />
                                <p>Terms & Conditions</p>
                            </div>
                        </button>
                    </div>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <button id='button' onClick={() => {
                            setbook(false);
                            setpolicy(true);
                            setterm(false);
                        }}>
                            <div className='box'>
                                <img src={pro3} alt="" />
                                <p>Privacy Policy</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {book ? <Bookhistory /> : null}
            {term ? <Terms /> : null}
            {policy ? <Privacy /> : null}

            {pop ? <Passpop
                fun={setpop}
            /> : null}

            <Footer />
        </>
    )
}

export default Profile