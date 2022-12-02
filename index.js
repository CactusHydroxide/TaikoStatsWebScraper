const { exit } = require("process")
const puppeteer = require("puppeteer")

const scrape = async () => {
    // Open browser + navigate to page
    const browser = await puppeteer.launch()
    const donderHiroba = await browser.newPage()
    await donderHiroba.goto("https://donderhiroba.jp/login.php")
    await donderHiroba.screenshot({ path: 'test.png' })



    //Clean up and close browser 
    await browser.close()
}

scrape()
