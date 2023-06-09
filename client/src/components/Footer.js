import React from 'react';
import styled from 'styled-components';

const StyledFooterContainer = styled.div`
    display: flex;
    font-family: 'Electrolize', sans-serif;
    background-color: rgb(105, 27, 58);
    text-decoration: none;
    color: rgb(255, 255, 255);
    padding: 10px;
    height: 40px;
    align-items: center;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 900;
    z-index: 2;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;

`

const Footer = () => {
    return (
        <StyledFooterContainer>
            <footer>Copyright © 2023 BASS Games Ltd. All rights reserved.</footer>
        </StyledFooterContainer>
    );
}

export default Footer;