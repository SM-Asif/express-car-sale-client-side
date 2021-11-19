import React, { useEffect, useState } from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Myorders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderedFoods, setOrderedFoods] = useState([]);
    console.log(orderedFoods);
    const { user } = useAuth();
    //get all orders
    useEffect(() => {
        fetch('https://polar-mountain-88734.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    //get all ordered car using their ID

    useEffect(() => {
        const ordersId = [];
        orders.map(order => (order.email === user.email) && ordersId.push(order.orderId));
        fetch('https://polar-mountain-88734.herokuapp.com/orders/orderId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ordersId)
        })
            .then(res => res.json())
            .then(foods => {
                setOrderedFoods(foods);
            });


    }, [orders, user.email]);
    //deleting order
    const handleDeleteUser = id => {
        const confirm = window.confirm('Are you sure to cancel order?');//check if user confirm to delete
        if (confirm) {
            const url = `https://polar-mountain-88734.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrderedFoods = orderedFoods.filter(food => food._id !== id);
                        setOrderedFoods(remainingOrderedFoods);
                        alert(`Order Cancelled`);
                    }
                });

        }

    }
    return (
                <Row>
                    <Col sm={{ span: 8, offset: 2 }}>
                        <ListGroup as="ol" numbered>
                            {
                                orderedFoods.map(food => <ListGroup.Item key={food._id}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{food.name}</div>
                                        <p className='mb-0'>Price: {food.price}</p>
                                        <p className='mb-0'>{'Quantity: '}
                                            {
                                                orders.filter(order => order.orderId === food._id).length
                                            }
                                        </p>

                                    </div>
                                    <Button onClick={() => handleDeleteUser(food._id)} variant='danger delete-btn'>
                                        X
                                    </Button>
                                </ListGroup.Item>)
                            }
                        </ListGroup>

                    </Col>
                </Row>
    );
};

export default MyOrders;