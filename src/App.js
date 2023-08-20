import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Movies from './Components/Movies/Movies';
import People from './Components/People/People';
import TvShows from './Components/TV_Shows/TV_Shows';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import jwtDecode from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import { DetailsContext, DetailsContextProvider } from './Context/DetailsContext';


function App() {

  useEffect(()=>{
    if (localStorage.getItem("userToken") !== null) {
      
      decodingToken()
    }
  },[])
  
  const [userToken, setuserToken] = useState(null)
  
  function decodingToken() {
    let tokenCode = localStorage.getItem("userToken")
    let decodeUserToken = jwtDecode(tokenCode)
    setuserToken(decodeUserToken)
  }
  
  
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout setuserToken={setuserToken} userToken={userToken} />, children: [
        { index: true, element: <Home /> },
        { path: 'movies', element: <Movies /> },
        { path: 'tv_shows', element: <TvShows /> },
        { path: 'people', element: <People /> },
        { path: 'signin', element: < SignIn decodingToken={decodingToken} /> },
        { path: 'register', element: < Register /> },
        { path: 'movies/details', element: < Details /> },
        { path: 'details', element: < Details /> },


      ]

    }
  ])

  return (
    <>
    <DetailsContextProvider>
      <RouterProvider router={routers}></RouterProvider>
    </DetailsContextProvider>
    </>
  )
}

export default App;

// npx generate-react-cli component Home