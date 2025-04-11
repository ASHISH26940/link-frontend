import { AuthForm } from "../components/AuthForm"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <AuthForm
        mode="signup"
        onSuccess={(token) => {
          localStorage.setItem("token", token)
          navigate("/login")
        }}
      />
      <p className="mt-4 text-gray-400 text-sm">
        Already have an account?{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Log in
        </span>
      </p>
    </div>
  )
}