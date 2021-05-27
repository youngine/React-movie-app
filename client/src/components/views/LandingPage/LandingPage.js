import React,{useEffect,useState} from 'react'
import { FaCode } from "react-icons/fa";
import {API_URL,API_KEY, IMAGE_BASE_URL} from '../../Config'
import MainImage from './Sections/Mainimage'

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
      fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response=>response.json())
      .then(response=>{
            setMovies(...[response.results])
            setMainMovieImage(response.results[0])
            console.log(response.results[0])
        }
      )
    }, [])

    return (
        <div style={{ width:'100%', margin:'0' }}>
            {/*movie Main IMage*/}
            {MainMovieImage &&
            <MainImage
                image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                title={MainMovieImage.original_title}
                text={MainMovieImage.overview}
            />
            }
            <div style={{width:'85%', margin: '1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr/>
            {/*movie Grid Cards*/}

            </div>

            <div style={{display:'flex', justifyContent:'center'}}>
                <button>Load More</button>
            </div>

        </div>

    )
}

export default LandingPage
