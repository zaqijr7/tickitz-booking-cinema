import React from 'react';
import { Col } from 'react-bootstrap';
import ButtonPaymentList from '../../DataDummy/ButtonPaymentList.js'

function ButtonPayment() {
    return (
        <React.Fragment>
            {
                ButtonPaymentList.map((value, index) => {
                    return (
                        <Col xs="auto">
                            <button className="btn btn-payment border border-3 mx-2 my-2" key={value.id}> 
                            <img src={value.buttonName} alt srcSet /> 
                            </button>
                        </Col>
                    )
                })
            }
        </React.Fragment>
    )
}

export default ButtonPayment;