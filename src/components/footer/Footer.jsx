import React from 'react';
import './footer.scss';

import Facebook from '@material-ui/icons/Facebook';
import Insta from '@material-ui/icons/Instagram';
import Youtube from '@material-ui/icons/YouTube';
import Call from '@material-ui/icons/Call';
import Mail from '@material-ui/icons/Mail';
import AddLocationAltIcon from '@material-ui/icons/AddLocation';
import { Copyright } from '@material-ui/icons';

const Footer = () => {
  return (
    <>
      <div
        className='container-fluid mt-5 px-0'
        id='cardcontainer'
        // data-aos='fade-up'
      >
        <div className='footer w-100'>
          <div className='row mb-4'>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <h1 style={{ color: 'White' }}>Sundara Looks</h1>
                </div>
                <p className="card-text">
                Get the bodycare you deserve Just search and book.</p>
                <div className="social mt-2 mb-3">
                  <a className='fa' href="https://www.instagram.com/aavahan_2k22/" target='1'><Facebook /></a>
                  <a className="fa" href='https://wa.me/8103570600' target="1"><Insta /></a>
                  <a className="fa" href='/'><Youtube /></a> </div>

              </div>
            </div>
            <div className='col-md-2 col-sm-2 col-xs-2'></div>
            <div className='col-md-3 col-sm-3 col-xs-3'>
              <h5 className='heading'>Popular Services</h5>
              <ul>
                <li>Haircut && color</li>
                <li>
                  <a href='/'>Nail</a>
                </li>
                <li>
                  <a href='/'>Massage</a>
                </li>
                <li>
                  <a href="/#Sponsors">Sponsors</a>
                </li>
                <li>Beard</li>
                <li>facial</li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-3 col-xs-3'>
              <h5 className='heading'>Contact Info</h5>
              <ul className='card-text'>
                <li><a href='/'><Call/> xxxxxxxxxxxxx</a></li>
                <li>
                  <a href='/'><Mail/> contact@sundaralooks.com</a>
                </li>
                <li><AddLocationAltIcon /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Magnam cum placeat eaque esse architecto,</li>

              </ul>
            </div>
          </div>
          <div className='divider mb-4'> </div>
          <div className='pull'>
            <p>
              <Copyright fontSize='small' /> 2022 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
