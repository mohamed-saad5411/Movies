import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {

  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3

  };

  const [todayMovies, settodayMovies] = useState([])
  const [latestTrailers, setlatestTrailers] = useState([])

  //trending
  function getTodayMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
      }
    };
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
      .then(response => response.json())
      .then(response => settodayMovies(response.results))
      .catch(err => console.error(err));
  }

  function displayTrendingMovies(info) {
    let x = info.target.innerHTML;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
      }
    };
    fetch(`https://api.themoviedb.org/3/trending/movie/${x === 'Today' ? 'day' : 'week'}?language=en-US`, options)
      .then(response => response.json())
      .then(response => settodayMovies(response.results))
      .catch(err => console.error(err));

  }

  //latestTrailers
  function getLatestTrailersMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
      }
    };
    fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setlatestTrailers(response.results))
    .catch(err => console.error(err));
  }

  // function displayLatestMovies(info) {
  //   let x = info.target.innerHTML;

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcyZGQ1ZmQyY2M1MmIwMmQzYmYzNjI2MGQ1ODAyOSIsInN1YiI6IjY0MmNhZDZlMGQyZjUzMDA3NzhjZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4Kfy0uZu4ruZWfGibUo-0fAvpSyJN2mH5CYRhxht04'
  //     }
  //   };
  //   fetch(`https://api.themoviedb.org/3/trending/movie/${x === 'TVFor' ? 'tv' : 'week'}?language=en-US`, options)
  //     .then(response => response.json())
  //     .then(response => settodayMovies(response.results))
  //     .catch(err => console.error(err));

  // }

  useEffect(() => {
    getTodayMovies()
    getLatestTrailersMovies()
  }, [])

  return (
    <>
      <header>
        <div className='main-header'>
          <div className='container d-flex flex-column h-100 justify-content-center'>
            <h2 className='h1 fw-bold text-white'>Welcome.</h2>
            <p className='h4 text-white'>Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
        </div>
      </header>

      <section>
        <div className='container mt-5  d-flex mb-3'>
          <h2 className='m-0'>Trending</h2>
          <button onClick={displayTrendingMovies} className='btn active btn-outline-success btn-sm px-3 ms-2 my-2'>Today</button>
          <button onClick={displayTrendingMovies} className='btn btn-outline-success btn-sm px-3 my-2 mx-1'>This Week</button>
        </div>
        <div className='trending'>
          <Slider {...settings} className='container mb-5'>
            {todayMovies.map((movie) =>
              <div className='row mx-5'>
                <div className="col-md-12">
                  <div className="card card-home pointer">
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="card-img-top" alt="..." />
                    <div className="p-2 pt-0">
                      <div className='bg-dark progress d-inline-block  d-flex justify-content-center align-items-center text-white rounded-circle rate'><p className='mb-0'>{(movie.vote_average)}</p></div>
                      <h3 className="card-title h6 fw-bold">{movie.original_title}</h3>
                      <p className="card-text">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </Slider>
        </div>
      </section>

      <section>
        <div className='container mt-5  d-flex mb-3'>
          <h2 className='m-0'>Latest Trailers</h2>
          <button className='active btn btn-outline-primary btn-sm px-3 my-2 mx-1'>TVFor</button>
        </div>
        <div className='latest-trailers py-3'>
          <Slider {...settings} className='container mb-5'>
            {latestTrailers.map((movie) =>
              <div className='row mx-5'>
                <div className="col-md-12">
                  <div className="card card-home pointer">
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="card-img-top" alt="..." />
                    <div className="p-2 pt-0">
                      <div className='bg-dark progress d-inline-block  d-flex justify-content-center align-items-center text-white rounded-circle rate'><p className='mb-0'>{(movie.vote_average)}</p></div>
                      <h3 className="card-title h6 fw-bold">{movie.name}</h3>
                      <p className="card-text">{movie.first_air_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </Slider>
        </div>
      </section>
    </>
  )

}


