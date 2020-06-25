import {SET_CURRENT_USER,GET_ERRORS} from "./types";
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import jwt_decode from 'jwt-decode';

//Registering user
export const registerUser = (userData,history) => (dispatch) => {
    axios.post("http://localhost:4003/api/speaker/register",userData)
    .then((response) => {
        history.push("/login");
    })
    .catch((error) => {
        dispatch({
            type : GET_ERRORS,
            payload : error
        })
        console.log(error);
    })
}

//Login user
export const loginUser = (userData,history) => (dispatch) => {
    axios.post("http://localhost:4003/api/speaker/login",userData)
    .then((response) => {
        //Saving the token to local storage
        const {token} = response.data;
        localStorage.setItem("token",token);

        //Setting token to Authorization header
        setAuthToken(token);

        //Decoding the access token to get user data
        const decodedToken = jwt_decode(token);

        //Passing the decoded token to the setCurrentSpeaker function
        dispatch(setCurrentSpeaker(decodedToken));
    })
    .catch((error) => {
        dispatch({
            type : GET_ERRORS,
            payload : error
        })
        console.log(error);
    })
}

//Setting currentSpeaker
export const setCurrentSpeaker = (decodedToken) => {
    return {
        type : SET_CURRENT_USER,
        payload : decodedToken
    }
}

//Logout speaker
export const logoutSpeaker = () => dispatch => {
    //Remove the tokens from the localStorage
    localStorage.removeItem("token");
    
    //Delete the authorization header
    setAuthToken(false);

    //Not passing any token to setCurrentSpeaker action
    dispatch(setCurrentSpeaker({}));
}