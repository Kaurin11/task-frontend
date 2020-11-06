import Axios from 'axios';

export const baseRequest = "http://localhost:8080";


export const setUser = (payload) => Axios.post(`${baseRequest}/users`, payload);
export const loginUser = (payload) => Axios.post(`${baseRequest}/auth/login`, payload)

export const getAllTask = (userId) => Axios.get(`${baseRequest}/users/${userId}/tasks`);
export const setTask = (userId,payload) => Axios.post(`${baseRequest}/users/${userId}/tasks`, payload);

export const getTaskByDate = (userId, date) => Axios.get(`${baseRequest}/users/${userId}/tasks/by-date?date=${date}`);