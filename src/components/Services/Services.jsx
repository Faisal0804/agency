import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'


const Services = () => {
  return (
    <>
      <Container fluid={true} className='text-center '>
      <h4 className="servicesMainTitle">Our Services</h4>
      <p>There are many variations of passages of Lorem Ipsum available,
       but the majority have suffered alteration.</p>
       <Container>
         <Row>
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <h4  className='serviceCardTitle'>Card Title</h4>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            </Col>
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <h4  className='serviceCardTitle'>Card Title</h4>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            </Col>
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <h4  className='serviceCardTitle'>Card Title</h4>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            </Col>

            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <h4  className='serviceCardTitle'>Card Title</h4>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            </Col>
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <h4  className='serviceCardTitle'>Card Title</h4>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            </Col>
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' }}>
                 
                <Card.Body>
                     <h4  className='serviceCardTitle'>Card Title</h4>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            </Col>
             

         </Row>
       </Container>
     
      </Container>
    </>
  )
}

export default Services