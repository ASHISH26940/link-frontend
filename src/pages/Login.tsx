import { AuthForm } from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-6">Log In</h1>
      <AuthForm
        mode="login"
        onSuccess={(token) => {
          localStorage.setItem("token", token)
          navigate("/dashboard")
        }}
      />
      <p className="mt-4 text-gray-400 text-sm">
        Don&apos;t have an account?{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  )
}