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
      </div>
    </div>
  )
}

export default Article
