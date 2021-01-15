import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.4.100:3000',
});

export const getTasks = async () => {
  try {
    const response = await instance.get('/tasks');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addTask = async (data) => {
  try {
    const response = await instance.post(`/tasks`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateTask = async (data) => {
  try {
    const response = await instance.post(`/tasks/${data.id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await instance.delete(`/tasks/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
