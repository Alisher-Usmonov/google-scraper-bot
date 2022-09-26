const TelegramBot = require("node-telegram-bot-api");
const { TOKEN, APP_URL } = require("../config");
const CommandController = require("./controllers/CommandController");
const MessageController = require("./controllers/MessageController");

const bot = new TelegramBot(TOKEN, {
    polling: true
});

// bot.setWebHook(`${APP_URL}/bot${TOKEN}`)

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