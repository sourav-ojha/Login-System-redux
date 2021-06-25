import axios from 'axios';

const url = "http://localhost:5000/auth";

export const login = (data) => axios.post(`${url}/login`, (data));
export const register = (data) => axios.post(`${url}/register`, (data));