import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Link } from 'react-router-dom'


export default function TvShows() {
  const [tvShows, settvShows] = useState([])

  async function getTvShows() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
      }

    };
    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => settvShows(response.results))
      .catch(err => console.error(err));
      console.log(tvShows);
  }

  // function getPages(info) {
  //   console.log(info);
  // }
  useEffect(() => {
    getTvShows()
  }, [])
  return (
    <>
      <div className="container my-5 py-5 w-75">
        <div className="row gy-4">
          {tvShows.map((movie) =>
            <div className="col-md-3">
              <div className="card">
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body pt-0">
                  <div className='bg-dark progress d-inline-block  d-flex justify-content-center align-items-center text-white rounded-circle rate'><p className='mb-0'>{(movie.vote_average) * 10} %</p></div>
                  <h2 className="card-title h5">{movie.name}</h2>
                  <p className="card-text">{movie.first_air_date}</p>
                </div>
              </div>
            </div>
          )}
          {/* <div className='text-center d-flex align-items-center justify-content-center'>
            <button onClick={getPages}  className='btn mx-1 btn-outline-secondary'>1</button>
            <button onClick={getPages} className='btn mx-1 btn-outline-secondary'>2</button>
            <button onClick={getPages} className='btn mx-1 btn-outline-secondary'>3</button>
            <button onClick={getPages} className='btn mx-1 btn-outline-secondary'>4</button>
            <button onClick={getPages} className='btn mx-1 btn-outline-secondary'>5</button>
          </div> */}
        </div>
      </div>
    </>
  )
  
}
