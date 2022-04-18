import React from 'react'
import './login.scss'

const Login = (props) => {

    const tog = () => {
        console.log('jaadu');
        const l = document.getElementById('toggle1');
        l.style.display = 'none';
        const r = document.getElementById('toggle2');
        r.style.display = 'block';
    }

    return (
        <>
            {props.value ?
                <div className='loginBox'>
                    <button onClick={() => props.fun(false)}>X</button>

                    <div id='toggle1'>
                        <p>Login</p>
                        <div className='loginToggle'>
                            <div className='t1 com'>
                                <button>I Am Customer</button>
                            </div>
                            <div className='t2 com'>
                                <button>Salon</button>
                            </div>
                        </div>

                        <section>Mobile No</section>
                        <div className='inpSection'>
                            <select name="" id="">
                                <option value="">+91</option>
                                <option value="">+91</option>
                                <option value="">+91</option>
                                <option value="">+91</option>
                            </select>
                            <input type="text" name="phone" id="" placeholder='Enter your number' />
                        </div>

                        <section>Password</section>
                        <input type="password" name="phone" id="pass" placeholder='Enter your password' />
                        <a id='forgot' href="/">Forgot passward?</a>

                        <div>
                            <button className='btn btn-primary'>Login</button>
                        </div>

                        <div className='account'>
                            Don't Have Account? <button onClick={tog}>Register Now</button>
                        </div>
                    </div>


                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div id='toggle2'>
                        <p>Register Now</p>

                        <section style={{ marginTop: '15px' }}>Full Name</section>
                        <input type="Text" name="phone" id="pass" placeholder='Enter your Name' />

                        <section style={{ marginTop: '15px' }}>Mobile No</section>
                        <div className='inpSection'>
                            <select name="" id="">
                                <option value="">+91</option>
                                <option value="">+91</option>
                                <option value="">+91</option>
                                <option value="">+91</option>
                            </select>
                            <input type="text" name="phone" id="" placeholder='Enter your number' />
                        </div>


                        <section style={{ marginTop: '15px' }}>Password</section>
                        <input type="password" name="phone" id="pass" placeholder='Enter your password' />

                        <section style={{ marginTop: '15px' }}>Confirm Password</section>
                        <input type="password" name="phone" id="pass" placeholder='Enter your password' />

                        <section style={{ marginTop: '15px' }}>State</section>
                        <select name="" id="state">
                            <option value="">Madhya pradesh</option>
                            <option value="">Uttar pradesh</option>
                        </select>

                        <div className='check'>
                            <input type="checkbox" name="" />
                            <span>Agree Terms & Conditions</span>
                        </div>

                        <div>
                            <button className='btn btn-primary'>Register Now</button>
                        </div>

                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


                </div> : null}
        </>
    )
}

export default Login;