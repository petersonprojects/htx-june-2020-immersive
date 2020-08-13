import React from 'react'
import Keys from './Keys'
import './styles.css'
import { Column, Row, Col, Container } from 'react-bootstrap';

const Calculator = () => {
    return (
        <>
        <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 4 }} >
            <Row>
                <div className="window">0</div>
            </Row>
            <Row>
                <Keys num="AC" bgc="true" />
                <Keys num="+/-" bgc="true" />
                <Keys num="%" bgc="true" />
                <Keys num="x" bgc="true" />

            </Row>
            <Row>
                <Keys num="7" />
                <Keys num="8" />
                <Keys num="9" />
                <Keys num="x" bgc="true" />

            </Row>
            <Row>
                <Keys num="4" />
                <Keys num="5" />
                <Keys num="6" />
                <Keys num="-" bgc="true" />
            </Row>
            <Row>
                <Keys num="1" />
                <Keys num="2" />
                <Keys num="3" />
                <Keys num="+" bgc="true" />
            </Row>
            <Row>
                <Keys num="0" zero={true} />
                <Keys num="." />
                <Keys num="=" bgc="true" />
            </Row>

            </Col>
        </Row>

       
      </Container>
        </>
    )
}

export default Calculator
