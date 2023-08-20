import React, { useContext, useEffect, useState } from 'react'
import styles from './Details.module.css'
import axios from 'axios'
import { BrowserRouter, Link } from 'react-router-dom'
import { DetailsContext, DetailsContextProvider } from '../../Context/DetailsContext'

export default function Details() {

  const [detailsOfMovie, setdetailsOfMovie] = useState([])

  async function getDetailsMovie() {
    // console.log(getMovies);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${603692}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setdetailsOfMovie(response))
      .catch(err => console.error(err));
  }

  // console.log(detailsOfMovie);

  useEffect(() => {
    getDetailsMovie()
  }, [])
  return (
    <>
      <div className="details">
        <div className="container text-white">
          <div className="row py-4">
            <div className="col-md-3">
              <img src={"https://image.tmdb.org/t/p/w500" + detailsOfMovie.poster_path} className='w-100 rounded-2' alt="" />

            </div>
            <div className="col-md-9">
              <h2 className='h1'>{detailsOfMovie.original_title}<span> (2023)</span></h2>
              <p><span className='pe-2'><i class="fa-solid fa-r"></i></span>{detailsOfMovie.release_date} (US) /  / 2h 50m</p>
              <p>{detailsOfMovie.tagline}</p>
              <h3>Overview</h3>
              <p>{detailsOfMovie.overview}</p>
              {/* <div className="row">
                {detailsOfMovie.genres.map((genre) =>
                  <div className="col-md-4">
                    <p>{genre.name}</p>
                  </div>
                )}
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </>
  )

}
