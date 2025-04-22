import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from '@/lib/auth'
import { useToast } from '@/components/ui/use-toast'

type AuthMode = 'login' | 'register'

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { setUser, setToken } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (mode === 'login') {
        // Здесь будет реальный API-запрос
        const mockUser = { id: '1', email, name: 'User', role: 'user' as const }
        setUser(mockUser)
        setToken('mock-token')
        toast({
          title: 'Успешный вход',
          description: 'Добро пожаловать в Bistro Buzz Hub!',
        })
      } else {
        // Здесь будет реальный API-запрос для регистрации
        const mockUser = { id: '1', email, name, role: 'user' as const }
        setUser(mockUser)
        setToken('mock-token')
        toast({
          title: 'Регистрация успешна',
          description: 'Добро пожаловать в Bistro Buzz Hub!',
        })
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Что-то пошло не так. Попробуйте снова.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{mode === 'login' ? 'Вход' : 'Регистрация'}</CardTitle>
        <CardDescription>
          {mode === 'login' 
            ? 'Войдите в свой аккаунт' 
            : 'Создайте новый аккаунт'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          variant="link"
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
        >
          {mode === 'login' 
            ? 'Нет аккаунта? Зарегистрируйтесь' 
            : 'Уже есть аккаунт? Войдите'}
        </Button>
      </CardFooter>
    </Card>
  )
} 