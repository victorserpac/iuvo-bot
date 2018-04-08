const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const chatbot = new Telegram.Telegram('465904519:AAEE5FUFQx9XPyJGnpHnT5afWtGGeqjGvyI');

class EventsController extends TelegramBaseController {
  ajudaAction(scope) {
    let msg = `Pode crer, você é o 12376123º da fila :D`;
    // scope.sendMessage(msg);
    // scope.sendMessage(msg);
    KeyboardButton
  } 

  get routes() {
    return {
      'ajuda': 'ajudaAction',
    }
  }
}

class StartController extends TelegramBaseController { 
  
  startAction(scope) {
    let msg = `Fala ai mano, de boas?`;
    scope.sendMessage(msg);
  } 

  get routes() {
    return {
      'start': 'startAction',
    }
  }
}

chatbot.router.when(
  new TextCommand('/ajuda', 'ajuda'), new EventsController(),
);

chatbot.router.when(  
  new TextCommand('/start', 'start'), new StartController(),
);