import React, { useState, useEffect, useReducer } from 'react';
import alsa from './assets/images/alsa.png';
import flixbus from './assets/images/flixbus.png';
import styled from 'styled-components';
import { motion } from "framer-motion";

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
            { id: 5, logo: alsa, originTime: '22h20', originCity: 'Bordeaux', finishTime: '10h15', destination: 'Bercy Seine', price: 47, seats: 73 },
            { id: 6, logo: flixbus, originTime: '03h20', originCity: 'Gare SNCF de Bordeaux - Parking Descas', finishTime: '09h00', destination: 'Bercy Seine', price: 15, seats: 28 },
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}>
                        <CardTrips key={trip.id}>
                            <div>
                                <ImageTrips src={trip.logo} />
                                <Text>{trip.originTime} : {trip.originCity}</Text>
                                <Text>{trip.finishTime} : {trip.destination}</Text>
                            </div>
                            <div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <Button
                                        onClick={() => handleClick(trip)}
                                        type="button">
                                        SELECT
                                    </Button>
                                </motion.div>
                            </div>
                        </CardTrips>
                    </motion.div>
                ))}
            </ul>
            {isDisplay &&
                <ContainerTrip>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}>
                        <Overlay onClick={() => handleClose()} />
                    </motion.div>
                    <motion.div
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        exit={{ x: 200 }}>
                        <Card>
                            <WrapperImage>
                                <Image src={tripsState.logo} />
                            </WrapperImage>
                            <Text>Origin: {tripsState.originTime} {tripsState.originCity}</Text>
                            <Text>Destination: {tripsState.finishTime} {tripsState.destination}</Text>
                            <Text>{tripsState.price} EUR</Text>
                            <Text>{tripsState.seats} Seats available</Text>
                        </Card>
                    </motion.div>
                </ContainerTrip>
            }


        </Container>
    );


}

export default Trips;