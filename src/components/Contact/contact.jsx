import React from 'react'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faFacebook } from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons' 




const contact = () => {
  return (
    <>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                 <h2>Contact Us.</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    `<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="danger">Danger</Button>
                </Form>`
                </Col>

                <Col className='mt-5 ' sm={12} md={6} lg={6}>
                  <p><FontAwesomeIcon icon={faHouse} /> Adress:</p>
                  <p>Mobile:</p>
                  <p>email:</p>
                  <p><FontAwesomeIcon icon={['fab', 'facebook-f']} />facebook:</p>
               
                  
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default contact