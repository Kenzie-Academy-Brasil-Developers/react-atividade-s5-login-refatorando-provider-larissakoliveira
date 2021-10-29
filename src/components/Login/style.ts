import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 50px;
    font-weight: bold;
    color: white;
    background: blue;
    cursor: pointer;
    position: relative;
    z-index: 0;
    text-transform: uppercase;
    border-radius: 100%;

&:hover:before {
    content: '';
    background: linear-gradient(320deg, purple, pink, red, yellow, green, black, cyan, violet);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    background-size: 600px;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 1;
    border-radius: 100%;
    animation: rainbowButton 35s linear infinite;
}

@keyframes rainbowButton {
    15% { background-position: 300%; }
}
 `;