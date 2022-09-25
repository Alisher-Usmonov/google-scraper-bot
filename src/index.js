const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = require("../config");
const CommandController = require("./controllers/CommandController");
const MessageController = require("./controllers/MessageController");

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.on("message", (msg) => {
    const { from: { id: userId } } = msg;
    const { text } = msg;
    try {
        if (text.startsWith("/")) {
            CommandController(bot, msg);
        } else {
            MessageController(bot, msg);
        }
    } catch (err) {
        bot.sendMessage(userId, "Xatolik yuz berdi");
    }
})