
import React, { Component } from 'react';
import Stepper from './Stepper';
import {Row, Col, Container} from 'react-bootstrap'

class Puppies extends Component {


    constructor(props) {

        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount = async () => {

        let url = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json"

        let response = await fetch(url);

        let results = await response.json();

        this.setState({
            movies: results.movies
        })

    }

    render() {

        let movies = this.state.movies.map((movie, index) => {
            return <div key={index}>
                <h1>{movie.title}</h1>

                <Row className="justify-content-center">

                    <Col>
                        <img height="300px" src={`https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/${movie.poster}`}/>
                    </Col>

                    <Col>
                        <p>{movie.description}</p>
                    </Col>
                    
                </Row>


                <Row className="justify-content-center">
                    <Stepper key={index}/>
                </Row>
            </div>
        });

        return (
            <>

                <Container>
                    {movies}
                </Container>

            
            </>
        )
    }
}

export default Puppies
