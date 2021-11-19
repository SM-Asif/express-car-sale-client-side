import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCars from '../../../hooks/useCars';
import SingleCar from '../SingleCar/SingleCar';

const Cars = () => {
    const [cars] = useCars();
    return (
        <section id='cars' className="p-1 p-md-5">
            <Container>
                <div className="text-center mb-4">
                    <h1>Our Latest Collections</h1>
                </div>
                <Row>
                    {
                        cars.slice(0, 6).map(car => <SingleCar key={car._id} singleCar={car}></SingleCar>)
                    }
                </Row>
                </Container>
        </section>
    );
};

export default Cars;