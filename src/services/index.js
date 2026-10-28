import axios from "axios";

export const AXIOS = axios.create({
    baseURL: "https://api-tarefas-49fr.onrender.com"
    // baseURL: "http://localhost:3000"
})