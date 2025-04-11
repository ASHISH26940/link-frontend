import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { signup, login } from "../lib/api"

interface Props {
    mode: "signup" | "login"
    onSuccess: (token: string) => void
}

export function AuthForm({ mode, onSuccess }: Props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async () => {
        setIsLoading(true)
        setError("")
        
        try {
            if (mode === "signup") {
                const signupData = await signup(email, password)
                console.log("Signup Data:", signupData)
                onSuccess(signupData.token)
            } else if (mode === "login") {
                const loginData = await login(email, password)
                if (!loginData || !loginData.token) {
                    setError("Login failed")
                    return
                }
                console.log("Login Data:", loginData.token)
                onSuccess(loginData.token)
            }
        } catch (err) {
            console.error("Auth error:", err)
            setError(err instanceof Error ? err.message : "Authentication failed")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-4 w-80 mx-auto mt-20">
            <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Processing..." : mode === "signup" ? "Sign Up" : "Log In"}
            </Button>
        </div>
    )
}