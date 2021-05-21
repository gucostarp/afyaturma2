import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'

});

export const postform = axios.create({
    baseURL: 'https://webhook.site/225fa310-42f9-47e6-a9bb-f4140cec8e15'

});