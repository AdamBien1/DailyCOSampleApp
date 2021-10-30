import React, { useReducer } from "react";
import DailyIframe from '@daily-co/daily-js';
import axios from "axios";
import DailyContext from "./dailyContext";
import DailyReducer from "./dailyReducer";
import { GET_ROOM, SET_ERROR } from "../types";

const DailyState = props => {
    const initialState = {
        localParticipiant: null,
        room: null,
        participiants: null,
        loading: false,
    }

    const [state, dispatch] = useReducer(DailyReducer, initialState);

    const API_KEY = process.env.REACT_APP_DAILY_API_KEY
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
    };
    const roomsEndpoint = "https://api.daily.co/v1/rooms"

    const createRoom = async (roomName) => {
        const endpoint = roomsEndpoint
        const exp = Math.round(Date.now() / 1000) + 60 * 30;    //Expires after 30 minutes
        const properties = {
                enable_chat: true,
                start_video_off: true,
                start_audio_off: false,
                exp: exp,
                lang: "en",
        };

        let response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify({
                name: roomName.replace(/\s/g, "-"),     //Replaces whitespace with a dash (whitespace = invalid character in url)
                properties,
            })
        })
        let data = await response.json();
        return data;
    }

    const getRoom = async (roomName) => {
        const endpoint = roomsEndpoint.concat(`/${roomName.replace(/\s/g, "-")}`)       //See above @createRoom func
        let response = await fetch(endpoint, {
            method: "GET",
            headers,
        })

        if(response.ok) {
            let data = await response.json();
    
            dispatch({type: GET_ROOM, payload: data})
            return data;
        } else {
            throw ({
                type: "danger",
                header: response.status,
                message: "Ooops, something went wrong!"
            });
        }

    }

    const joinRoom = async (url) => {
        if(url) {
            const callObject = DailyIframe.createCallObject();
            callObject.join({ url })
        }
    }

    return <DailyContext.Provider
                value={{
                    localParticipiant: state.localParticipiant,
                    room: state.room,
                    participiants: state.participiants,
                    loading: state.loading,

                    createRoom: createRoom,
                    getRoom: getRoom,
                    joinRoom: joinRoom,
                }}
            >
                {props.children}
            </DailyContext.Provider>
}

export default DailyState;
