import React from 'react';
import './navbar.scss'
import PersonIcon from '@material-ui/icons/Person';

import logo from '../../assets/img1.png'
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} alt="..." /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink style={{ textDecoration: 'none', color: 'black', margin: '0px 10px 0px 10px' }} activeClassName='active' className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{ textDecoration: 'none', color: 'black', margin: '0px 10px 0px 10px' }} activeClassName='active' className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight:'500', fontFamily:'Arial'}}>
                  Salon Nearby
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item text-center" to="/salon_nearby/men_salon">Men Salon</Link></li>
                  <li><Link className="dropdown-item text-center" to="/salon_nearby/women_salon">Women Salon</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink style={{ textDecoration: 'none', color: 'black', margin: '0px 10px 0px 10px' }} activeClassName='active' className="nav-link" to="/booking">Booking</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{ textDecoration: 'none', color: 'black', margin: '0px 10px 0px 10px' }} activeClassName='active' className="nav-link" to="/services">Sevices</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{ textDecoration: 'none', color: 'black', margin: '0px 10px 0px 10px' }} activeClassName='active' className="nav-link" to="/team">Team</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginBottom: '0px' }}>
                <section className='login'><button onClick={() => props.fun(true)} className="nav-link" style={{ color: 'white', backgroundColor: 'black', border: 'none', margin: 'auto' }}><PersonIcon /><span> login </span></button></section>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;