const TeleBot = require('telebot');
const bot = new TeleBot('465904519:AAEE5FUFQx9XPyJGnpHnT5afWtGGeqjGvyI');

bot.on('/ajuda', (msg) => {
  return bot.sendMessage(msg.from.id, 'fuck', {
    replyMarkup: bot.keyboard([[
      bot.button('location', 'Localização')
    ]])
  });
});

bot.on('location', (msg) => {
  return msg.reply.photo('http://4.bp.blogspot.com/_N5AwYWwAocY/TR9Ff4xTuxI/AAAAAAAAA_U/ahWFnJ6hD3c/s1600/positivo.jpg');
});

bot.start();