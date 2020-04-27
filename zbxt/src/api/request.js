import axios from './index'

export const getTest = () => {
  return axios.get('/teacher/env/list/')
}

export const addUser = () => {
  return axios.post('/teacher/env/add/')
}
