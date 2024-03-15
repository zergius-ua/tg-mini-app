import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '7049060604:AAGiY5_xHNTepF6F2WI84xR3YYRHnMLptc8'
const webAppUrl = 'https://angular-tg-app-c027f-e567b.web.app/'

const bot = new Telegraf(token)

bot.command('start', ctx => {
    ctx.reply('Welcome! Press the button to launch app',
        // Markup.keyboard([
        //     Markup.button.webApp(
        //     'Send message',
        //     webAppUrl
        // )])
        Markup.keyboard([Markup.button.webApp('Send message', `${webAppUrl}/feedback`)])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()