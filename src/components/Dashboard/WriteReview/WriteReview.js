import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const WriteReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    //get form data
    const onSubmit = data => {
        data.name = user.displayName;
        data.email = user.email;
        fetch('https://polar-mountain-88734.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                result.insertedId && alert('Review added successfully');
                reset();
            });
            console.log(data);
    }
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Write review here" defaultValue="" {...register("review", { required: true })} />
                        {errors.review && <span className="text-danger">Please write something</span>}
                    </Form.Group>
                    
                    <Button className="mb-3 btn btn-success" type="submit">
                        Leave Review
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default WriteReview;