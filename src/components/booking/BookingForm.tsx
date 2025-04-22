import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/lib/auth'
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { useNavigate } from 'react-router-dom'

interface BookingFormProps {
  restaurantId: string
  restaurantName: string
}

export function BookingForm({ restaurantId, restaurantName }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>('')
  const [guests, setGuests] = useState<string>('2')
  const { user } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()

  const availableTimes = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
    "21:00", "21:30", "22:00"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !time || !guests) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      })
      return
    }

    try {
      // Здесь будет реальный API-запрос для бронирования
      toast({
        title: 'Бронирование успешно',
        description: `Ваш столик в ресторане "${restaurantName}" забронирован на ${format(date, 'dd MMMM yyyy', { locale: ru })} в ${time}`,
      })
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось забронировать столик. Попробуйте снова.',
        variant: 'destructive',
      })
    }
  }

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Бронирование столика</CardTitle>
          <CardDescription>
            Для бронирования столика необходимо войти в систему
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" onClick={() => navigate('/auth')}>
            Войти
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Бронирование столика</CardTitle>
        <CardDescription>
          Выберите дату, время и количество гостей
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Дата</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Время</label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите время" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Количество гостей</label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите количество гостей" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Забронировать
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 