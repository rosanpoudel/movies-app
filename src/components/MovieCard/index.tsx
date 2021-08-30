import { useState, FC } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';


const StyledMovieCard = styled.div`
    display: flex;
    cursor:pointer;
    
    .image{
        width: 50%;
        height: 125px;
        img{
            height: 100%;
            background: rgba(0,0,0,0.8);
        }
    }
    .details{
        padding: 15px 10px 20px 15px;
        width: 50%;
        background: #ffffff;
    }
    .name{
        font-size: 18px;
        color: #000000;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
        line-height: 1;
    }
    .category{
        color: gray;
        margin: 5px 0 2px 0;
    }
    .director{
        display:inline-flex;
        color: #000000;
        font-weight: 500;
        transition: .5s;
        &:hover{
            color: #1D1875;
            font-weight: bold;
            font-size: 15px;
            transition: .5s;
        }

    }
    
`;

interface MoviesCardProps {
    movieDetail: any;
}

const MoviesCard: FC<MoviesCardProps> = ({ movieDetail }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <StyledMovieCard>
                <div className="image">
                    <img src={movieDetail.image} alt={movieDetail.title} />
                </div>
                <div className="details">
                    <p className="name" >{movieDetail.title}</p>
                    <p className="category">{movieDetail.category}</p>
                    <p className="director"
                        onClick={(e) => {
                            e.stopPropagation();
                            setModalVisible(true);
                        }}>{movieDetail.director}</p>

                </div>
            </StyledMovieCard>
            <Modal visible={modalVisible} movieDetail={movieDetail} setModalVisible={setModalVisible} />
        </>
    )
}

export default MoviesCard
