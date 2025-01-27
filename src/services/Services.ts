import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const res = await API.post(url, dados)
    setDados(res.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const res = await API.post(url, dados)
    setDados(res.data);
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const res = await API.get(url, header)
    setDados(res.data);
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const res = await API.post(url, dados, header)
    setDados(res.data);
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const res = await API.put(url, dados, header)
    setDados(res.data);
}

export const deletar = async(url: string, header: Object) => {
    await API.delete(url, header)
}