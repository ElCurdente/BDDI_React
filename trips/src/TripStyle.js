import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #237182;
`;

export const CardTrips = styled.section`
    width : 30vw;
    height : 10vh;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    margin: 10px;
    padding: 4em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    `;

export const ImageTrips = styled.img`
    width: 50px;
    height: auto;
    `;

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    `;

export const ContainerTrip = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 2;
`

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 80vw;
height: 100vh;
opacity: 0.7;
background-color: #000;
`

export const Card = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    width : 20vw;
    height : 100vh;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    padding: 10px;
    z-index: 3;
    background-color: #fff;
    opacity: 1;
`

export const WrapperImage = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

export const Image = styled.img`
    width: 200px;
    height: auto;
`

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: #000;
`