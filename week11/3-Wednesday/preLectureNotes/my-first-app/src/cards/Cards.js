import React, { Component } from 'react';
import CardStyle from './CardStyle';
import {Row} from 'react-bootstrap';
import data from './cardData';


class Cards extends Component {


    render() {

        //console.log(data);  //array of objects
        
        let cardsArr = data.map(card => {

            return <CardStyle buttonText={card.buttonText} title={card.title} text={card.text}  />
        })

        return (
            <>
                <Row>
                    
                   {cardsArr}

                  
                </Row>

                
            </>
        )
    }
}

export default Cards
