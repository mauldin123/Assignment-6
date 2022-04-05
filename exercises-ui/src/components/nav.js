import React from 'react'
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <nav>
        <Link to="/"> Home Page</Link>
        <Link to="/add-exercise"> Create Exercise Page</Link>
        </nav>
    )
}

export default Navigation