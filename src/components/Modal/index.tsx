import { FC } from 'react';
import styled from 'styled-components';
import CrossIcon from '../../assets/images/cross-icon.png';

const StyledModal = styled.div`
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
        height: 180px;
        object-fit: cover;
        background: #000000;
    }
`;

interface ModalProps {
    visible: boolean;
    movieDetail: any;
    setModalVisible: Function;
}


const Modal: FC<ModalProps> = ({ visible, movieDetail, setModalVisible }) => {
    return (
        visible ? (
            <StyledModal>
                <div className="director-modal" data-testid="modal" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="modal-inner">
                        <div className="top">
                            <p className="director-name">{movieDetail.director}</p>
                            <button className="close-icon"
                                onClick={(e) => {
                                    setModalVisible(false);
                                    e.stopPropagation()
                                }}>
                                <img src={CrossIcon} alt="" />
                            </button>
                        </div>
                        <img className="director-image" src={movieDetail.director_image} alt="" />
                        <p className="director-overview">{movieDetail.director_overview}</p>
                    </div>
                </div >
            </StyledModal>
        ) : null
    )
}

export default Modal
