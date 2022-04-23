import React from 'react';
import './editservices.scss'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const Editservices = (props) => {


    return (
        <>
            <div className='editCon'>

                <button className='cancel' onClick={()=>props.fun(false)}>X</button>
                <div className='container-fluid editdata'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 imgsection'>
                            <img src={props.img} alt="" />
                            <input type="file" name="" id="file" />
                        </div>
                        <div className='col-xl-6 col-lg-6 data'>
                            <p>Services name</p>
                            <input type="text" name="" id="" placeholder='Hair Cut' />

                            <div className='conatiner price'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p>Price</p>
                                        <input type="text" name=""  placeholder='400' />
                                    </div>
                                    <div className='col-6'>
                                        <p>Discount</p>
                                        <input type="text" name=""  placeholder='90' />
                                    </div>
                                </div>
                            </div>



                            <p id='text'>Short Description</p>
                            <input type="text" name="" id="" placeholder="it's services good for clients" />

                            <p class='text'>Description</p>
                            <textarea name="" id="" cols="43" rows="4"></textarea>
                         
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

export default Editservices