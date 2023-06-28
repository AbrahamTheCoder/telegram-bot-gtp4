
import { Context, Markup, Telegraf, Telegram } from 'telegraf';
import { Update } from 'typegram';

const token: string = process.env.TELEGRAM_BOT_TOKEN as string;

const telegram: Telegram = new Telegram(token);

const bot: Telegraf<Context<Update>> = new Telegraf(token);


bot.start((ctx) => ctx.reply('Welcome'));

bot.help((ctx) => {
    ctx.reply('Send /start to receive a greeting');
    ctx.reply('Send /keyboard to receive a message with a keyboard');
    ctx.reply('Send /quit to stop the bot');
  });

bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));