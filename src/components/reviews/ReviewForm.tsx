import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/lib/auth'
import { Star } from 'lucide-react'

interface ReviewFormProps {
  restaurantId: string
  restaurantName: string
  onSuccess?: () => void
}

export function ReviewForm({ restaurantId, restaurantName, onSuccess }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const { user } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, поставьте оценку',
        variant: 'destructive',
      })
      return
    }

    try {
      // Здесь будет реальный API-запрос для отправки отзыва
      toast({
        title: 'Отзыв отправлен',
        description: 'Спасибо за ваш отзыв!',
      })
      setRating(0)
      setComment('')
      onSuccess?.()
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить отзыв. Попробуйте снова.',
        variant: 'destructive',
      })
    }
  }

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Оставить отзыв</CardTitle>
          <CardDescription>
            Для того чтобы оставить отзыв, необходимо войти в систему
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" onClick={() => window.location.href = '/auth'}>
            Войти
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-[500px]">
      <CardHeader>
        <CardTitle>Оставить отзыв</CardTitle>
        <CardDescription>
          Поделитесь своим мнением о ресторане "{restaurantName}"
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoverRating || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Ваш комментарий</label>
            <Textarea
              placeholder="Расскажите о вашем опыте..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Отправить отзыв
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 