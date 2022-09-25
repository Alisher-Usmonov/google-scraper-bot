const puppeteer = require("puppeteer");
const path = require("path");

module.exports = async (bot, msg) => {
    const { from: { id: userId } } = msg;
    const { text } = msg;
    const imagePath = path.join(__dirname, "..", "..", "/assets", "result.png");
    const browser = await puppeteer.launch();
    try {
        if (text) {
            const page = await browser.newPage();
            await page.setViewport({
                width: 1536,
                height: 2048,
            })
            await page.goto(`https://google.com/search?q=${text}`);
            await page.screenshot({ path: imagePath })

            await bot.sendPhoto(userId, imagePath, {
                caption: `<a href="google_scraper_bot.t.me">Google Scraper</a> natijalari`,
                parse_mode: "HTML"
            })

            browser.close();
        }
    } catch (err) {
        console.log(err.message);
        await bot.sendMessage(userId, "Xatolik yuz berdi")
    }
}