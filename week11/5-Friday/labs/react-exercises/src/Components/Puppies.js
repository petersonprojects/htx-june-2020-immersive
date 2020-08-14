
import React, { Component } from 'react';
import Stepper from './Stepper';

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
            return <div>
                <h1>{movie.title}</h1>
                <img key={index} src={`https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/${movie.poster}`}/>
                <p>{movie.description}</p>
                <Stepper/>
            </div>
        });

        return (
            <>


                {movies}

            
            </>
        )
    }
}

export default Puppies
