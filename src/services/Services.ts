import axios from "axios";

const API = axios.create({
    baseURL: 'https://blogpessoal-7pg6.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const res = await API.post(url, dados)
    setDados(res.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const res = await API.post(url, dados)
    setDados(res.data);
}