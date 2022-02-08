const { Telegraf, Markup, Scenes, session,WizardScene } = require('telegraf');
require('dotenv').config()

console.log("START TELEGRAF API")
console.log("Init bot ... : ", process.env.BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN)
console.log("Init bot ... SUCCESS")
bot.start((ctx) => {
    ctx.reply('Bienvenue '+ ctx.message.from.first_name+' '+ctx.message.from.last_name +' dans le system Find me')
    ctx.reply("Pour continuer merci de vous authentifier en envoyant vos coordonées", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "📲 Envoyer Mon contact",
                        request_contact: true,
                        request_location: true,
                    },
                ],
            ],
            one_time_keyboard: true,
        },
    })
    console.log('# # # ')
}
)

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.command('quit', (ctx) => {
    ctx.reply('Bye ..')
})

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
/*
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
*/
