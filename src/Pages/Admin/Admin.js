import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import BodyAdmin from '../../Component/BodyAdmin/BodyAdmin';
import Footer from '../../Component/Footer/Footer';
import NavigationBar from '../../Component/Navbar/Navbar';
import jwt from 'jsonwebtoken'
import { Link } from 'react-router-dom';

import './Admin.css';

function Admin() {
    const token = useSelector(state => state.auth.token)
    const data = jwt.decode(token)
    const role = data.role
    return (
        <>
            { role === 'ADMIN' ?
                <NavigationBar>
                    <div className="body py-5">
                        <Container>
                            <BodyAdmin />
                        </Container>
                    </div>
                    <Container>
                        <Footer />
                    </Container>
                </NavigationBar>
                :
                <Row className='vh-100 vw-100 d-flex align-items-center bg-dark'>
                    <div className='text-center'>
                        <span className='text-danger fw-bold display-3'>403 Access Forbiden</span> <br/>
                        <span className='text-white'>Back to <Link to='/'> Home </Link></span>
                    </div>
                </Row>
            }
        </>
    )
}

export default Admin
