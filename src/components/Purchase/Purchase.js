import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css';

const Purchase = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    //get single car 
    useEffect(() => {
        const url = `https://polar-mountain-88734.herokuapp.com/cars/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [id]);

    //get form data
    const onSubmit = data => {
        data.status = 'pending';
        data.orderId = car._id;
        fetch('https://polar-mountain-88734.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                result.insertedId && alert('Order placed successfully');
                reset();
            });
            console.log(data);
    }
    return (
        <>
        <Header></Header>
        <main>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Card className="bg-dark text-white">
                            <Card.Img src={car.img} alt="Card image" />
                            <Card.ImgOverlay className='product-detail bg-warning text-dark'>
                                <Card.Title>{car.name}</Card.Title>
                                <Card.Text>{car.details}</Card.Text>
                                <Card.Text className='btn btn-secondary'>{car.price} TK</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" defaultValue={user.displayName} {...register("name", {required: true})} />
                                        {errors.name && <span className="text-danger">Name is required</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} {...register("email", { required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} />
                                        {errors.email && <span className="text-danger">Please enter a valid email</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Address" defaultValue="" {...register("address", {required: true})} />
                                        {errors.address && <span className="text-danger">Address is required</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="City" defaultValue="" {...register("city", {required: true})} />
                                        {errors.city && <span className="text-danger">City is required</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="phone number" defaultValue="" {...register("phone", {required: true, pattern: /^\d+$/})} />
                                        {errors.phone && <span className="text-danger">Please enter a valid phone number</span>}
                                    </Form.Group>
                                    <Button className="mb-3 btn btn-success" type="submit">
                                        Place Order
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>
        </main>
        <Footer></Footer>
        </>
    );
};

export default Purchase;