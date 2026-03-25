'use server'

/**
 * Server Action для отправки заявок в Telegram
 * Работает на любом хостинге с поддержкой Node.js
 */
export async function sendToTelegram(formData) {
  try {
    // Получаем токены из переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    // Проверяем наличие токенов
    if (!botToken || !chatId) {
      console.error('Ошибка: Не заданы TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID')
      return { success: false, error: 'Конфигурация не завершена' }
    }

    // Форматируем сообщение с эмодзи для красоты
    const message = `
🏥 <b>Новая заявка на прием!</b>

👤 <b>Имя:</b> ${formData.name}
📞 <b>Телефон:</b> ${formData.phone}
💬 <b>Причина обращения:</b>
${formData.reason}

⏰ <b>Дата отправки:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Kiev' })}
    `.trim()

    // Отправляем запрос в Telegram Bot API
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML', // Поддержка HTML-форматирования
        }),
      }
    )

    const data = await response.json()

    // Проверяем успешность отправки
    if (response.ok && data.ok) {
      return { success: true }
    } else {
      console.error('Ошибка Telegram API:', data)
      return { success: false, error: data.description || 'Ошибка отправки' }
    }
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error)
    return { success: false, error: 'Ошибка сервера' }
  }
}
