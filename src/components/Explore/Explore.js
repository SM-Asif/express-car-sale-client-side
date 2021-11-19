import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCars from '../../hooks/useCars';
import SingleCar from '../Home/SingleCar/SingleCar';

const Explore = () => {
    const [cars] = useCars();
    return (
        <main>
            <section>
                <Container>
                    <div className="text-center mb-4">
                        <h1>Our Exclusive Collections</h1>
                    </div>
                    <Row>
                        {
                            cars.map(car => <SingleCar key={car._id} singleCar={car}></SingleCar>)
                        }
                    </Row>
                </Container>
            </section>

        </main>
    );
};

export default Explore;