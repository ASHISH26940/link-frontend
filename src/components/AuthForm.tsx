import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { signup, login } from "../lib/api"
import { useNavigate } from "react-router-dom"

interface Props {
    mode: "signup" | "login"
    onSuccess: (token: string) => void
}

export function AuthForm({ mode, onSuccess }: Props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async () => {
        
        if (mode === "signup") {
            const signData = await signup(email, password);
            console.log("Data:",signData);
            navigate("/login");
            const loginData = await login(email, password);
            if(!loginData){
                alert("Sign up failed!");
                return;
            }
            console.log("Login Data:",loginData.token);
            localStorage.setItem("token", loginData.token)
            onSuccess(loginData.token);
            navigate("/dashboard");
        }
        
    }

    return (
        <div className="flex flex-col gap-4 w-80 mx-auto mt-20">
            <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={handleSubmit}>{mode === "signup" ? "Sign Up" : "Log In"}</Button>
        </div>
    )
}
