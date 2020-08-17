
import React, { Component } from 'react'
import Stepper from './Stepper'

class Movies extends Component {

    //api call 
    //display titles 
    //stepper

    constructor() {
        super()

        this.state= {

            movies: []
        }
        
    }

    componentDidMount = async () =>{

        let results = await fetch('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json');

        let movieList = await results.json();

        this.setState({

            movies: movieList.movies
        })

    }


    render() {

        let mapArr = this.state.movies.map((movie, index) =>{

            return <div key={index}>
                {movie.title}
                
                <img height="150px" src={"https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/" + movie.poster}/>
                <Stepper key={index} />
                </div>
        })

        return (
            <>
                {mapArr}
            </>
        )
    }
}

export default Movies
