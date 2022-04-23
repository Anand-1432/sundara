import React from 'react'
import './editoffer.scss'

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const Editoffer = (props) => {
    return (
        <>
            <div className='editCon'>

                <button className='cancel' onClick={() => props.fun(false)}>X</button>
                <div className='container-fluid editdata'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 imgsection'>
                            <img src={props.img} alt="" />
                            <input type="file" name="" id="file" />
                        </div>
                        <div className='col-xl-6 col-lg-6 data'>
                            <p>Offer title</p>
                            <input type="text" name="" id="" placeholder='Hair Color 20% off' />

                            <div className='conatiner price'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Price</p>
                                        <input type="text" name="" placeholder='150' />
                                    </div>
                                    <div className='col-6'>
                                        <p>Discount</p>
                                        <input type="text" name="" placeholder='240' />
                                    </div>
                                </div>
                            </div>

                            <p class='text'>Description</p>
                            <textarea name="" id="" cols="43" rows="4" placeholder='long description type here..'></textarea>

                            <div>
                                <button className='btn btn-primary'><SaveIcon fontSize='small' /> Save</button>
                                <button className='btn btn-dark'><DeleteIcon fontSize='small' /> Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editoffer