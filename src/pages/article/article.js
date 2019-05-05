import React, { useEffect } from 'react'
import { Loader } from '../../components/loader'

import './article.css'

const getImageUrl = imageId => `https://image.tmdb.org/t/p/w500/${imageId}`

const Article = props => {
  const { getMovie, match, currentMovie, loading } = props
  const {
    params: { id },
  } = match

  useEffect(() => {
    getMovie(id)
  }, [getMovie, id])

  const onClick = () => props.history.goBack()

  if (loading) return <Loader />

  const genres = currentMovie.genres.map(({ name }) => name).join(' / ')
  const IMBD = currentMovie.vote_average
    ? +currentMovie.vote_average.toFixed(1)
    : '--'

  return (
    <div className="article">
      <button className="back" onClick={onClick}>
        ←
      </button>
      <h1>{currentMovie.title}</h1>
      <div
        className="content"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <img
          src={getImageUrl(
            currentMovie.backdrop_path || currentMovie.poster_path
          )}
          alt={currentMovie.title}
          style={{ width: '100%' }}
        />
        <div className="description">{currentMovie.overview}</div>
        <div className="details">
          <div className="row">
            <span>Language:</span>
            <p>{currentMovie.original_language}</p>
          </div>
          <div className="row">
            <span>Status:</span>
            <p>{currentMovie.status}</p>
          </div>
          <div className="row">
            <span>Date:</span>
            <p>{currentMovie.release_date}</p>
          </div>
          <div className="row">
            <span>Genres:</span>
            <p>{genres}</p>
          </div>
          <div className="row">
            <span>IMDb:</span>
            <p>{IMBD}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
