import { AuthForm } from "@/components/auth/AuthForm"
import { useAuth } from "@/lib/auth"
import { Navigate } from "react-router-dom"

export default function Auth() {
  const { user } = useAuth()

  if (user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Добро пожаловать в Bistro Buzz Hub
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Войдите или зарегистрируйтесь, чтобы продолжить
          </p>
        </div>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  )
} 