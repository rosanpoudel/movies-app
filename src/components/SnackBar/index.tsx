import React, { FC } from 'react';
import styled from 'styled-components';
import Tick from '../../assets/images/tick.svg';

const StyledSnackBar = styled.div`
    background: rgb(18 ,120 ,25 , 0.8);
    color: #ffffff;
    text-align: center;
    position: fixed;
    top: ${props => props.position ? props.position + 'px' : '300px'};
    width: 370px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 5px 5px 0 0;
    visibility: ${props => props.status ? 'visible' : 'hidden'};
    transition:visibility 0.5s linear;
    .tick{
        img{
            width: 20px;
            height: 20px;
        }
    }
    .msg{
        font-size: 16px;
        margin-left: 15px;
    }
`;

interface SnackBarProps {
    status: boolean;
}

const SnackBar: FC<SnackBarProps> = ({ status }) => {
    const bodyHeight = document.body.scrollHeight;
    const snackbarPosition = bodyHeight - 60 - 66;

    return (
        <StyledSnackBar status={status} position={snackbarPosition}>
            <p className="tick">
                <img src={Tick} alt="tick icon" />
            </p>
            <p className="msg">Added To Favorite</p>
        </StyledSnackBar>
    )
}

export default SnackBar
