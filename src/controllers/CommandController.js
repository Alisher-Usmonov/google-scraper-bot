module.exports = async (bot, msg) => {
    const { from: { id: userId } } = msg;
    const text = msg.text.slice(1);
    try {
        if (text === "start") {
            await bot.sendMessage(userId, `Assalomu alaykum. Bot orqali Google'dan qidiruv natijalarini rasm shaklida olishingiz mumkin.`)
        }
    } catch (err) {
        await bot.sendMessage()
    }
}