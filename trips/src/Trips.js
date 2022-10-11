import React, { useState, useEffect, useReducer } from 'react';
import alsa from './assets/images/alsa.png';
import flixbus from './assets/images/flixbus.png';
import styled from 'styled-components';

const Card = styled.section`
        width : 30vw;
        height : auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 5px;
        margin: 10px;
        padding: 4em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `;

const Image = styled.img`
        width: 50px;
        height: auto;
    `;

const Button = styled.button`
        width: 100px;
        height: 30px;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    `;

function Trips() {

    //Set the initial state of the trips

    const [trips, setTrips] = useState([]);
    
    useEffect(() => {
        setTrips([
            {id: 1, logo:alsa, originTime : '02h45', originCity: 'Bordeaux', finishTime: '10h55', destination:'Bercy Seine', price : 30, seats : 30},
            {id: 2, logo:alsa, originTime : '06h45', originCity: 'Bordeaux', finishTime: '15h25', destination:'Bercy Seine', price : 28, seats : 55},
            {id: 3, logo:alsa, originTime : '23h20', originCity: 'Bordeaux', finishTime: '07h15', destination:'Bercy Seine', price :42, seats : 78},
            {id: 4, logo:flixbus, originTime : '01h20', originCity: 'Gare SNCF de Bordeaux - Parking Descas', finishTime: '08h00', destination:'Bercy Seine', price : 20, seats : 18},
        ]);
    }, []);

    // Store the trips in a reducer

    const initialState = {
        id : null,
        logo : null,
        originTime : null,
        originCity : null,
        finishTime : null,
        destination : null,
        price : null,
        seats : null
    };

    const [tripsState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_TRIP':
                return {
                    ...state,
                    id : action.payload.id,
                    logo : action.payload.logo,
                    originTime : action.payload.originTime,
                    originCity : action.payload.originCity,
                    finishTime : action.payload.finishTime,
                    destination : action.payload.destination,
                    price : action.payload.price,
                    seats : action.payload.seats
                };
            case 'DISPLAY':
                console.log('Displaying trips');
                console.log(state);
                return state;
            case 'CLOSE':
                console.log('Closing trips');
                return state;
            default:
                return state;
        }
    }, trips);

    // handle click on a trip

    const handleClick = (trip) => {
        dispatch({type: 'SET_TRIP', payload: trip});
        dispatch({type: 'DISPLAY'});
    };
    
    return (
        <div>
        <ul>
            {trips.map(trip => (
            <Card key={trip.id}>
                <div>
                    <Image src={trip.logo} alt="logo" />
                    <p>{trip.originTime} : {trip.originCity}</p>
                    <p>{trip.finishTime} : {trip.destination}</p>
                </div>
                <div>
                    <Button onClick={() => handleClick(trip)} type="button">SELECT</Button>
                </div>
            </Card>
            ))}
        </ul>
        </div>
    );


}

export default Trips;