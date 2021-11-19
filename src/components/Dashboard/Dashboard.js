import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import AddCar from './AddCar/AddCar';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MakePayment from './MakePayment/MakePayment';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageCars from './ManageCars/ManageCars';
import WriteReview from './WriteReview/WriteReview';

const Dashboard = () => {
    const { user } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <>
            <main>
                <section>
                    <Container>
                        <div className="text-center mb-4">
                            <h1>Welcome, {user.displayName}</h1>
                            <p>Here you can manage all your orders</p>
                            <Link className="btn btn-warning mx-2" to={`${url}`}>Dashboard</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/my-orders`}>My Orders</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/make-payment`}>Make Payment</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/write-review`}>Write Review</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/make-admin`}>Make an Admin</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/manage-all-orders`}>Manage All Orders</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/manage-cars`}>Manage Cars</Link>
                            <Link className="btn btn-warning mx-2" to={`${url}/add-car`}>Add a New Car</Link>
                        </div>
                        <Switch>
                            <Route path={`${path}/my-orders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/add-car`}>
                                <AddCar></AddCar>
                            </Route>
                            <Route path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/make-payment`}>
                                <MakePayment></MakePayment>
                            </Route>
                            <Route path={`${path}/manage-all-orders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/manage-cars`}>
                                <ManageCars></ManageCars>
                            </Route>
                            <Route path={`${path}/write-review`}>
                                <WriteReview></WriteReview>
                            </Route>
                        </Switch>
                    </Container>
                </section>


            </main>
        </>
    );
};

export default Dashboard;