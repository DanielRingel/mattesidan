const { sum, pq } = require("./calc");
const puppeteer = require("puppeteer");


test("adds 2 + 3 to equal 5", () => { //Texten kan vara den man vill
    expect(sum(2, 3)).toBe(5);
  });
  
  test("pq add -10, 25 to equal 5, 5", () => { //Texten kan vara den man vill
    expect(pq(-10, 25)).toBe("5, 5");
  });

  test("Vad som ska göras", async ( ) => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 70,
      args: ["--window-size=1920, 1080"]
    });
  
    const page = await browser.newPage();
    await page.goto(
    "file:///C:/Users/daniel.ringel/Documents/Webbutveckling/mattesidan-master/index.html"
    );
  // Här skriver du vad som ska göras på sidan
  await page.click("#p");
  await page.type("#p","2");
  await page.click("#q");
  await page.type("#q","-3");
  await page.click("#submit");
  const final_result = await page.$eval("#svar", el => el.textContent);
  await expect(final_result).toBe("1, -3");
  });
  