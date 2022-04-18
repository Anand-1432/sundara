import React from 'react'
import './salonmencard.scss'

const Salonmencard = (props) => {
    return (
        <>
            <div className="card Mencard" style={{width: '18rem', display:'inline-block'}}>
                <img className="card-img-top" src={props.img} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">edit</a>
                        <a href="/" className="btn btn-dark">delete</a>
                    </div>
            </div>
        </>
    )
}

export default Salonmencard