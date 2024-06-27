import React from 'react'
import {Button, Container, Row,Col} from 'react-bootstrap';
//import "../../assets/css/custom.css"

const Banner = () => {
  return (
    <>
       <Container fluid={true} className="TopFixedBanner p-0">
          <div className="topBannerOverlay">
              <Container>
                <Row>
                  <Col  >
                    <div className="topContent">
                      <span className="topContentTitle"> WE ARE AGENCY</span>
                      <h2 className="topContentSubTitle mt-2">TECHNOLOGY & INNOVATION FOR AGENCY SERVICES.</h2>
                      <a className="topContentLink" href="">contact us</a>
                      </div>
                  </Col>
                </Row>
              </Container>
          </div>
            
       </Container>
    </>
  )
}

export default Banner