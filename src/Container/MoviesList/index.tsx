import { useState, useEffect } from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import Axios from 'axios';
import styled from 'styled-components';
import MoviesCard from '../../components/MovieCard';
import SnackBar from '../../components/SnackBar';
import Spinner from '../../components/Spinner';


const StyledMoviesListWrapper = styled.div`
    position: relative;
    background: #ffffff;
    width: 400px;
    height: calc(100vh - 120px);
    overflow-x:hidden;
    overflow-y:auto;
    padding: 15px;
    box-sizing: border-box;
    ::-webkit-scrollbar {
        display: none;
    }
    .panel-content{
        padding: 10px;
        box-shadow: 2px 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 0 0 10px 10px;
    }
    .overview{
        text-align: justify;
        margin-bottom: 15px;
    }
    .favorite-btn{
        background: #1D1875;
        border:none;
        outline: none;
        padding: 8px 40px;
        color: #ffffff;
        border-radius: 10px;
        border: 1px solid #1D1875;
        cursor:pointer;
        transition: .5s;
        font-weight: 500;

        &:hover{
           background: #ffffff;
           color: #1D1875;
            transition: .5s;
        }
    }

    .spinner{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%);
        
    }
`;


const MoviesList = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [addFavoriteSuccess, setAddFavoriteSuccess] = useState(false);

    // fetchin movies
    const fetchData = async () => {
        const data = await Axios.get(
            `https://my-json-server.typicode.com/rosanpoudel/demo/db`
        );
        setAllMovies(data.data.movies);
    };

    // add to favorite
    const addToFavorite = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                setAddFavoriteSuccess(true);
            }, 800);
            setTimeout(() => {
                resolve(true);
                setAddFavoriteSuccess(false);
            }, 2400);
        });
    }



    // fetch movie data from api
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <StyledMoviesListWrapper>
            {
                allMovies.length ? (
                    <Collapse accordion>
                        {
                            allMovies.map((movie: any, index) => {
                                return (
                                    <Panel key={index} header={<MoviesCard movieDetail={movie} />}>
                                        <div className="panel-content">
                                            <p className="overview">{movie.overview}</p>
                                            <button className="favorite-btn" onClick={() => addToFavorite()}>Add To Favorite</button>
                                        </div>
                                    </Panel>
                                )
                            })
                        }
                    </Collapse>
                ) : <Spinner />
            }

            <SnackBar status={addFavoriteSuccess} />
        </StyledMoviesListWrapper>
    )
}

export default MoviesList
