import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import 'video-react/dist/video-react.css';
import { Player,VolumeMenuButton , BigPlayButton,LoadingSpinner ,ControlBar,ForwardControl,ReplayControl} from 'video-react';
import AnaImage from '../../assets/images/analysis.jpg'

const AboutVideo = () => {
  return (
    <>
     <Container fluid={true} className='text-center mt-5'>
        <Row>
            <Col sm={12} md={12} lg={12}>
              <Player 
               poster={AnaImage}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <ControlBar autoHide={false}>
                <ReplayControl seconds={5} order={2.1} />    
                <ForwardControl seconds={5} order={3.1} />
                <VolumeMenuButton vertical />
             
              </ControlBar>
              </Player>
            </Col>
        </Row>

     </Container>
    </>
  )
}

export default AboutVideo