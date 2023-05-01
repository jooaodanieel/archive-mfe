import axios from "axios";

const baseURL = 'http://localhost:8888/v1'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})