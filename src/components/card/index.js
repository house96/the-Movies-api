import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const getImageUrl = imageId => `https://image.tmdb.org/t/p/w500/${imageId}`

const Card = ({ movie }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={getImageUrl(movie.poster_path)} alt="poster" />
      </div>
      <div className="card_body">
        <h1>{movie.title}</h1>
        <p className="card_overview">{movie.overview}</p>
        <Link to={`/article/${movie.id}`} className="card_view-more">
          VIEW MORE
        </Link>
      </div>
    </div>
  )
}

export default Card
