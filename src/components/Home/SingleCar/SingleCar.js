import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleCar.css'

const SingleCar = (props) => {
    const { _id, name, details, price, img } = props?.singleCar;
    return (
        <Col sm={4} className="d-flex my-4 cars">
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <h6 className="card-price">Price: {price} TK</h6>
                    <Link className="btn btn-warning" to={`purchase/${_id}`}>Purchase Now</Link>
                </div>
            </div>
            </Col>
    );
};

export default SingleCar;