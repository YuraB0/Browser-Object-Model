const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');  // Переконайся, що твоя сторінка запущена на цьому порту

  // Перевірка кольору фону після першої кнопки
  await page.click('#button1');
  await page.waitForTimeout(1000);  // Заміна на waitForTimeout
  const backgroundColor1 = await page.evaluate(() => document.body.style.backgroundColor);
  console.log('firstcolor:', backgroundColor1);
  if (backgroundColor1 === 'rgb(0, 0, 255)') {
    console.log('first is correct');
  }

  // Перевірка кольору фону після другої кнопки
  await page.click('#button2');
  await page.waitForTimeout(1000);  // Заміна на waitForTimeout
  const backgroundColor2 = await page.evaluate(() => document.body.style.backgroundColor);
  console.log('secondcolor:', backgroundColor2);
  if (backgroundColor2 === 'rgb(255, 192, 203)') {
    console.log('second is correct');
  }

  // Перевірка кольору фону після наведення на третю кнопку
  await page.hover('#button3');
  await page.waitForTimeout(1000);  // Заміна на waitForTimeout
  const backgroundColor3 = await page.evaluate(() => document.body.style.backgroundColor);
  console.log('thirdcolor:', backgroundColor3);
  if (backgroundColor3 === 'rgb(165, 42, 42)') {
    console.log('third is correct');
  }

  await browser.close();
})();
