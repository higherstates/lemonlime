import { Link } from "react-router-dom"
import './HomeButton.css'

import React from 'react'

function HomeButton(props) {
  return (
    <Link to={props.to} className="home__btn">
        <div className="flex">
        { props.text} 
        </div>
    </Link>
  )
}

export default HomeButton
