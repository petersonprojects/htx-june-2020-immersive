
import React from 'react'

const Blogs = (props) => {

    return (
        <>
            Blogs
            <br/> <br/>
            <h1>{props.match.params.blogsID}</h1>

            {props.location.pathname}



        </>
    )
}

export default Blogs
