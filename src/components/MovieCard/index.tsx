import { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Modal } from 'antd';
const { Panel } = Collapse;
import CrossIcon from '../../images/cross-icon.png';
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

    }
    

    /* modal */
    .director-modal{
        position: fixed;
        top: 22px;
        left: 50%;
        transform: translate(-50%);
        z-index: 999;
        width: 400px;
        height: 700px;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content:center;
        align-items:center;        
    }
    .modal-inner{
        background: #ffffff;
        width: 360px;
        padding: 10px;

    }
    .director-overview{
        text-align:justify;
        padding: 20px 0;
    }
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .close-icon{
        border:none;
        background:none;
        cursor:pointer;
        padding: 0;
        img{
            width: 20px;
        }
    }
    .director-name{
        color: #000000;
        font-size: 24px;
        line-height: 1;
    }
    .director-image{
        width: 100%;
        max-height: 180px;
        object-fit: cover;
    }
    

`;
const MoviesCard = ({ movieDetail }) => {
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
                {
                    modalVisible ? (
                        <div className="director-modal" onClick={(e) => { e.stopPropagation(); }}>
                            <div className="modal-inner">
                                <div className="top">
                                    <p className="director-name">{movieDetail.director}</p>
                                    <button className="close-icon" onClick={(e) => { setModalVisible(false); e.stopPropagation() }}> <img src={CrossIcon} alt="" /> </button>
                                </div>
                                <img className="director-image" src={movieDetail.director_image} alt="" />
                                <p className="director-overview">{movieDetail.director_overview}</p>
                            </div>
                        </div>
                    ) : null
                }


            </StyledMovieCard>
        </>
    )
}

export default MoviesCard
