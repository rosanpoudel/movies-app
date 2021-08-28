import React from 'react';
import styled from 'styled-components';

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
        margin-top: 5px;
        svg{
            width: 20px;
            height: 20px;
        }
    }
    .msg{
        font-size: 16px;
        margin-left: 15px;
    }
`;

const SnackBar = ({ status }) => {
    const bodyHeight = document.body.scrollHeight;
    const snackbarPosition = bodyHeight - 60 - 72;



    return (
        <StyledSnackBar status={status} position={snackbarPosition}>
            <p className="tick">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="247.000000pt" height="204.000000pt" viewBox="0 0 247.000000 204.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,204.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                        <path d="M2110 2027 c-26 -7 -62 -23 -83 -35 -24 -16 -201 -233 -532 -655 -273 -348 -500 -633 -504 -635 -4 -1 -124 109 -265 245 -142 136 -276 259 -298 272 -32 19 -59 26 -124 29 -75 4 -89 2 -138 -22 -103 -51 -160 -144 -161 -262 0 -125 8 -135 435 -546 420 -405 431 -412 552 -411 51 0 79 6 121 27 51 25 93 73 663 767 335 408 622 758 637 778 85 109 67 288 -39 381 -73 64 -179 90 -264 67z" />
                    </g>
                </svg>
            </p>
            <p className="msg">Added To Favorite</p>
        </StyledSnackBar>
    )
}

export default SnackBar