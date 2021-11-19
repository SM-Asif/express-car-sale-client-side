import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(()=> {
    fetch('https://polar-mountain-88734.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data));
  },[]);
    return (

        <section id='reviews' className="p-1 p-md-5">
            <Container>
                <div className="text-center mb-4">
                    <h1>Reviews</h1>
                </div>
                <Row>
                    {
                        reviews.map(review => <Col sm={4} key={review._id}>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2">{review.name}</Card.Subtitle>
                                    <Card.Text>
                                    {review.review}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>



    );
};

export default Reviews;