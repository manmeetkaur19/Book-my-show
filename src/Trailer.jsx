import React from 'react'
import { Row,Card,Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Trailer(){
  return (
     <>
      <Container >
        <Row>
        <Col>
        <Card >
          <Row>
          <Col>
      <div style={{fontSize:'14px',fontWeight:'500',color:'black'}}>Videos For</div></Col>
      <Col>
      <Link to='/Inner'>
      <div style={{color:'red',fontSize:'18px',fontWeight:'500'}}>Jatt Nuu Chudail Takri</div>
      </Link>
      </Col>
      </Row>
      <div>Punjabi</div>
        </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
