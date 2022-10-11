import React, { useState, useEffect, useReducer } from 'react';
import alsa from './assets/images/alsa.png';
import flixbus from './assets/images/flixbus.png';
import styled from 'styled-components';

// import Trip from './Trip';
import { Container, CardTrips, ImageTrips, Button, ContainerTrip, Overlay, Card, WrapperImage, Image, Text } from "./TripStyle";

function Trips() {

    //Set the initial state of the trips

    const [trips, setTrips] = useState([]);
    const [isDisplay, setIsDisplay] = useState(false);

    useEffect(() => {
        setTrips([
            { id: 1, logo: alsa, originTime: '02h45', originCity: 'Bordeaux', finishTime: '10h55', destination: 'Bercy Seine', price: 30, seats: 30 },
            { id: 2, logo: alsa, originTime: '06h45', originCity: 'Bordeaux', finishTime: '15h25', destination: 'Bercy Seine', price: 28, seats: 55 },
            { id: 3, logo: alsa, originTime: '23h20', originCity: 'Bordeaux', finishTime: '07h15', destination: 'Bercy Seine', price: 42, seats: 78 },
            { id: 4, logo: flixbus, originTime: '01h20', originCity: 'Gare SNCF de Bordeaux - Parking Descas', finishTime: '08h00', destination: 'Bercy Seine', price: 20, seats: 18 },
        ]);
    }, []);

    // Store the trips in a reducer

    const initialState = {
        id: null,
        logo: null,
        originTime: null,
        originCity: null,
        finishTime: null,
        destination: null,
        price: null,
        seats: null
    };

    const [tripsState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_TRIP':
                return {
                    ...state,
                    id: action.payload.id,
                    logo: action.payload.logo,
                    originTime: action.payload.originTime,
                    originCity: action.payload.originCity,
                    finishTime: action.payload.finishTime,
                    destination: action.payload.destination,
                    price: action.payload.price,
                    seats: action.payload.seats
                };
            case 'DISPLAY':
                console.log('Displaying trips');
                setIsDisplay(true);
                return state;
            case 'CLOSE':
                console.log('Closing trips');
                setIsDisplay(false);
                return state;
            default:
                return state;
        }
    }, trips);

    // handle click on a trip

    const handleClick = (trip) => {
        dispatch({ type: 'SET_TRIP', payload: trip });
        dispatch({ type: 'DISPLAY' });
    };

    function handleClose() {
        dispatch({ type: 'CLOSE' });
    }

    return (
        <Container>
            <ul>
                {trips.map(trip => (
                    <CardTrips key={trip.id}>
                        <div>
                            <ImageTrips src={trip.logo} alt="logo" />
                            <Text>{trip.originTime} : {trip.originCity}</Text>
                            <Text>{trip.finishTime} : {trip.destination}</Text>
                        </div>
                        <div>
                            <Button onClick={() => handleClick(trip)} type="button">SELECT</Button>
                        </div>
                    </CardTrips>
                ))}
            </ul>
            {isDisplay &&
                <ContainerTrip>
                    <Overlay onClick={() => handleClose()}/>
                    <Card>
                        <WrapperImage>
                            <Image src={tripsState.logo} />
                        </WrapperImage>
                        <Text>Origin: {tripsState.originTime} {tripsState.originCity}</Text>
                        <Text>Destination: {tripsState.finishTime} {tripsState.destination}</Text>
                        <Text>{tripsState.price} EUR</Text>
                        <Text>{tripsState.seats} Seats available</Text>
                    </Card>
                </ContainerTrip>
            }


        </Container>
    );


}

export default Trips;