import React from 'react';
import './Login.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { googleSignin, setUser, error, setError, setIsLoading } = useAuth();
    //redirect user after login
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';
    const history = useHistory();

    //google sign in
    const handleGoogleSigin = () => {
        googleSignin()
            .then((result) => {
                setUser(result.user);
                setError('');
                history.push(redirectUrl);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }
    return (
        <main>
            <Container>
                <Row>
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Card>
                            <Card.Body>
                                <div className='text-center'>
                                    <Button className='google-signin' onClick={handleGoogleSigin} type="button"><img className="google-icon" alt='google' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" /> <span>Google Sign In</span></Button>
                                    <p className='text-danger'>{error}</p>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>
        </main>


    );
};

export default Login;