import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AnaImage from '../../assets/images/analysis.jpg'
import { BarChart, Bar, XAxis, YAxis ,Tooltip, ResponsiveContainer } from 'recharts';

const Analysis = () => {
    const data = [
        {
          name: 'Designing',
          percentages: 100,
         
        },
        {
          name: 'Management',
          percentages: 80,
         
        },
        {
          name: 'Marketing',
          percentages: 70,
        },
        {
          name: 'Development',
          percentages: 50,
        },
        {
            name: 'marketing',
            percentages: 40,
          },
        
        
      ];
      
  return (
    <>
      <Container className="Analysis">
         <div>
            <Container>
                <Row>
                     <Col sm={12} md={6} lg={8}>
                        <Container>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <h1>What do we do?</h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim ex et qui, modi repellendus aperiam reprehenderit dignissimos aut laborum ipsum impedit similique! Enim non rerum omnis reiciendis debitis officiis!</p>

                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    <h4>Our Working Process.</h4>
                                    <div style={{width:'100%',height:'300px'}} >
                                        <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                width={500}
                                                height={300}
                                                data={data}
                                                barSize={30}
                                                >
                                                <XAxis dataKey="name"  />
                                                <YAxis  />
                                                <Tooltip />                                       
                                                <Bar dataKey="percentages" fill="#333" background={{ fill: '#eee' }} />
                                                </BarChart>
                                        </ResponsiveContainer>

                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    
                    </Col>

                    <Col sm={12} md={6} lg={4}>
                        <img src={AnaImage} />
                    </Col>

                </Row>

            </Container>
         </div>

      </Container>
    </>
  )
}

export default Analysis