import axios from "axios"

const API = "http://localhost:3000";

const token = localStorage.getItem("token");

if (!token) {
    throw new Error("Token not found");
}

console.log(`Token: ${token}`);


export const signup = async (email: string, password: string) => {
    const res = await axios.post(`${API}/signup`, { email, password })
    return res.data
}

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${API}/login`, { email, password })
    return res.data
}

export const createLink = async (
    token: string,
    originalUrl: string,
    customAlias?: string,
    expiresAt?: string) => {
    const res = await axios.post(
        `${API}/create-link`,
        { originalUrl, customAlias, expiresAt },
        { headers: { Authorization: `Bearer ${token}` } }
        )
    console.log('Link created:', res.data)
    console.log(`Link created: ${res}`);
    return res
}

export const getLinks = async (token: string) => {
    const res = await axios.get(`${API}/get-user`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    console.log("Links:", res.data);

    return res.data
}
