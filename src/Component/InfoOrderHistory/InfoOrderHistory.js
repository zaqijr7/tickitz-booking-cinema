import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import http from '../../Helper/http'
import CardTicketHistory from '../CardTicketHistory/CardTicketHistory'

function InfoOrderHistory() {
    const [ticket, setTicket] = useState([])
    const token = useSelector(state => state.auth.token)
    const getDataTicketHistory = async (dataToken) => {
        try {
            const dataTicket = await http(dataToken).get(`ticket/list`)
            setTicket(dataTicket.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getDataTicketHistory(token)
    }, [])

    return (
        <>
            <Col lg={8} className="my-5 my-lg-0">
                <Card className="border-0" style={{ height: '660px' }}>
                    <Card.Header className="bg-white d-flex pb-0 pt-3 px-4">
                        <Col xs='auto'>
                            <Link className="text-decoration-none text-dark" to="/profile"> Account Settings </Link>
                        </Col>
                        <Col xs='auto' className="ms-5 profile-bar pb-3 text-muted">
                            <Link className="text-decoration-none text-muted" to="/order-history"> Order History </Link>
                        </Col>
                    </Card.Header>
                    <Card.Body className="px-5 overflow-auto">
                        {
                            ticket.map((items, index) => {
                                return (
                                    <>
                                        <CardTicketHistory
                                            key={index}
                                            date={items.showDate}
                                            time={items.showTime}
                                            movie={items.movie}
                                            cinema={items.cinema}
                                            logo={items.logo}
                                            used={false}
                                        />
                                    </>
                                )
                            })
                        }
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default InfoOrderHistory
