import React, { Component } from 'react'
import queryString from 'query-string'

import Filter from '../../components/filter'
import Card from '../../components/card'
import Footer from '../../components/footer'
import { Loader } from '../../components/loader'
import NotFound from '../../components/notFound'

import './home.css'

class Home extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(
    {
      location: { search: prevSearch },
    },
    prevState
  ) {
    const {
      location: { search },
    } = this.props
    if (prevSearch !== search) {
      this.fetchData()
    }
  }

  fetchData = () => {
    const { getPopularMovies, getSearchMovies } = this.props
    const {
      location: { search },
    } = this.props
    if (search) {
      const query = queryString.parse(search)
      if (query && query.query) {
        return getSearchMovies(search)
      }

      const url = queryString.extract(search)
      return getPopularMovies(url)
    }
    getPopularMovies(`page=1`)
  }

  render() {
    const { movies, loading } = this.props

    if (loading) return <Loader />

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Filter />
        <section className="card-list">
          {movies && movies.length ? (
            movies.map(movie => <Card key={movie.id} movie={movie} />)
          ) : (
            <NotFound />
          )}
        </section>
        <Footer />
      </div>
    )
  }
}

export default Home
