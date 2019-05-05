import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const getImageUrl = imageId => `https://image.tmdb.org/t/p/w500/${imageId}`

const Card = ({ movie }) => {
  const { vote_average, poster_path, title, overview, id } = movie
  const rate = vote_average ? Number(vote_average).toFixed(1) : '😕'

  return (
    <div className="card">
      <div className="card_image">
        <img src={getImageUrl(poster_path)} alt="poster" />
        <div className="card_rate">
          <span>★</span>
          {rate}
        </div>
      </div>
      <div className="card_body">
        <h3>{title}</h3>
        <p className="card_overview">{overview}</p>
        <Link to={`/article/${id}`} className="card_view-more">
          VIEW MORE
        </Link>
      </div>
    </div>
  )
}

export default Card
