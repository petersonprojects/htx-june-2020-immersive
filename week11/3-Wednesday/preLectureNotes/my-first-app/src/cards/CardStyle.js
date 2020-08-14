import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const CardStyle = (props) => {
    return (
        <>
            <Col md={3}>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                </Card.Text>
                        <Button variant="primary">{props.buttonText}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default CardStyle
