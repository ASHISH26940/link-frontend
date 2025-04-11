import axios from "axios"

const API = "https://link-backend-ih8b.onrender.com";

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
    if (!token) {
        throw new Error("Token required to create a link")
    }
    
    const res = await axios.post(
        `${API}/create-link`,
        { originalUrl, customAlias, expiresAt },
        { headers: { Authorization: `Bearer ${token}` } }
    )
    console.log('Link created:', res.data)
    return res
}

export const getLinks = async (token: string) => {
    if (!token) {
        throw new Error("Token required to get links")
    }
    
    const res = await axios.get(`${API}/get-user`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    console.log("Links:", res.data)
    return res.data
}