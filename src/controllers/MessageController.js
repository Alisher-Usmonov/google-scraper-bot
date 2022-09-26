const puppeteer = require("puppeteer");

module.exports = async (bot, msg) => {
    const { from: { id: userId } } = msg;
    const { text } = msg;
    const browser = await puppeteer.launch();
    try {
        if (text) {
            const page = await browser.newPage();
            await page.setViewport({
                width: 1536,
                height: 2048,
            })
            await page.goto(`https://google.com/search?q=${text}`);
            const screenshot = await page.screenshot({ encoding: "binary" })

            await bot.sendPhoto(userId, screenshot, {
                caption: `<a href="google_scraper_bot.t.me">Google Scraper</a> natijalari`,
                parse_mode: "HTML",
                contentType: "application/octet-stream"
            })

            browser.close();
        }
    } catch (err) {
        console.log(err.message);
        await bot.sendMessage(userId, "Xatolik yuz berdi")
    }
}