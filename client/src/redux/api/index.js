import axios from 'axios';

const url = 'http://localhost:3003'

export const fetchData = () => axios.get(`${url}/deliver`);
export const createDeliver = (newDeliver) => axios.post(`${url}/deliver`, newDeliver);
export const deleteDeliver = (id) => axios.delete(`${url}/deliver/${id}`);
export const updateDeliver = (id, updatedDeliver) => axios.put(`${url}/deliver/${id}`, updatedDeliver);
