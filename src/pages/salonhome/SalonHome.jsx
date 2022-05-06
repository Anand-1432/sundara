import React from 'react'
import Footer from '../../components/footer/Footer'
import "./salonHome.scss"

import banner2 from '../../assets/banner2.png'
import profile from '../../assets/profile.png';
import location from '../../assets/location.png';

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
                        <div className='col-lx-8 col-lg-8 salonData'>
                            <img id='banner' src={banner2} alt="" />
                            <h5>Lackme Salon</h5>
                            <p>Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor,
                                Tatya Tope Nagar, Nagpur, Maharashtra 440015</p>
                            <div className='proSection'>
                                <img src={profile} alt="" />
                                <section>Steve Smith</section>
                                <p>stevesmithexaple@gmail.com</p>
                            </div>
                            <hr />
                            <div className='abouts'>
                                <section>About Salon</section>
                                <p id='datas'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sequi asperiores pariatur quaerat eos voluptas. Placeat dolores
                                    explicabo quaerat nobis ipsum ex,
                                    velit, inventore ut aspernatur sequi optio et quod cum?
                                    Aspernatur culpa, natus fugiat id fugit magni perspiciatis reiciendis
                                    mollitia! Quisquam porro vel maxime quaerat tempore, ipsam cum, earum repudiandae placeat <br /> <br />
                                    dolor sit amet consectetur adipisicing elit.
                                    Sequi asperiores pariatur quaerat eos voluptas. Placeat dolores
                                    explicabo quaerat nobis ipsum ex,
                                    velit, inventore ut aspernatur sequi optio et quod cum?
                                    Aspernatur culpa, natus fugiat id fugit magni perspiciatis reiciendis
                                    mollitia! Quisquam porro vel maxime quaerat tempore, ipsam cum, earum repudiandae placeat <br /> <br />
                                    dolor sit amet consectetur adipisicing elit.
                                    Sequi asperiores pariatur quaerat eos voluptas. Placeat dolores
                                    explicabo quaerat nobis ipsum ex,
                                    velit, inventore ut aspernatur sequi optio et quod cum?
                                    Aspernatur culpa, natus fugiat id fugit magni perspiciatis reiciendis
                                    Aspernatur culpa, natus fugiat id fugit magni perspiciatis reiciendis
                                    </p>
                            </div>

                            <hr />

                            <div className='location'>
                              <p>Location</p>
                              <img src={location} alt="" />
                            </div>
                        </div>

                        <div className='col-lx-4 col-lg-4 commentSection'>
                            <div className='salonTime'>
                                <h4>Salon Timing</h4>
                                <div className='gd'>
                                    <div>Monday To Friday</div>
                                    <div className='tts'>10:00 - 8:00 PM</div>
                                </div>
                                <div className='gd'>
                                    <div>Saturday</div>
                                    <div className='tts'>10:00 - 7:00 PM</div>
                                </div>
                                <div className='gd'>
                                    <div>Sunday</div>
                                    <div className='tts'>10:00 - 4:00 PM</div>
                                </div>
                            </div>

                            <div className='comments'>
                                <p id='head'>Comments</p>
                                <div className='com'>
                                    <section className='times'>Today 06:13pm</section>
                                    <img src={profile} alt="" />
                                    <section className='name'>Steve Smith</section>
                                    <span>stevesmithexaple@gmail.com</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                                        ipsa nemo aperiam itaque beatae esse nobis adipisci eos? Sint magnam
                                        explicabo odit! Excepturi libero amet ut,
                                    </p>
                                    <hr />
                                </div>

                                <div className='com'>
                                    <section className='times'>Today 06:13pm</section>
                                    <img src={profile} alt="" />
                                    <section className='name'>Steve Smith</section>
                                    <span>stevesmithexaple@gmail.com</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                                        ipsa nemo aperiam itaque beatae esse nobis adipisci eos? Sint magnam
                                        explicabo odit! Excepturi libero amet ut,
                                    </p>
                                    <hr />
                                </div>

                                <div className='com'>
                                    <section className='times'>Today 06:13pm</section>
                                    <img src={profile} alt="" />
                                    <section className='name'>Steve Smith</section>
                                    <span>stevesmithexaple@gmail.com</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                                        ipsa nemo aperiam itaque beatae esse nobis adipisci eos? Sint magnam
                                        explicabo odit! Excepturi libero amet ut,
                                    </p>
                                    <hr />
                                </div>

                            </div>

                               <div className='Addcomment'>
                                   <p>Write A Comments</p>
                                   <textarea name="" id="" cols="32" rows="5" placeholder='type comments....'></textarea>
                                   <button className='btn'>Send Comment</button>
                               </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SalonHome