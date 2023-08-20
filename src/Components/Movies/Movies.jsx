import React, { useContext, useEffect, useState } from 'react'
import styles from './Movies.module.css'
import axios from 'axios'
import { BrowserRouter, Link } from 'react-router-dom'
import { DetailsContext } from '../../Context/DetailsContext'


export default function Movies() {

  const [popularMovies, setpopularMovies] = useState([])
  let { getMyMovies } = useContext(DetailsContext)

  async function getMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
      }

    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setpopularMovies(response.results))
      .catch(err => console.error(err));
  }

  async function getClickedMovie(id) {
    let {response} = await getMyMovies(id)
    console.log(response);
  }
  // console.log(popularMovies);

  // function getPages(info) {
  //   console.log(info);
  // }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <div className="container my-5 py-5 w-75">
        <div className="row gy-4">
          {popularMovies.map((movie) =>
            <div className="col-md-3">
              <Link className="card card-movie pointer text-decoration-none" to="details">
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body pt-0">
                  <div className='bg-dark progress d-inline-block  d-flex justify-content-center align-items-center text-white rounded-circle rate'><p className='mb-0'>{(movie.vote_average) * 10} %</p></div>
                  <h2 className="card-title h5">{movie.original_title}</h2>
                  <p className="card-text">{movie.release_date}</p>
                </div>
                <button onClick={()=> getClickedMovie(movie.id)}  className='btn mx-1 btn-outline-secondary'>1</button>

              </Link>
            </div>
          )}
          {/* <div className='text-center d-flex align-items-center justify-content-center'>
            <button onClick={()=> getClickedMovie(popularMovies.id)}  className='btn mx-1 btn-outline-secondary'>1</button>
          </div> */}
        </div>
      </div>
    </>
  )

}
