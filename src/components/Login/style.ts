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
    top: -2px;
    left:-2px;
    border-radius: 100%;
    background-size: 600px;
    z-index: -1;
    width: 100%;
    height: 100%;
    animation: rainbowButton 35s linear infinite;
}

&:hover:before {
    opacity: 1;
    border-radius: 100%;
}

@keyframes rainbowButton {
    15% { background-position: 400% 0; }
}
 `;