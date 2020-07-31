const {Builder, By, Key, until} = require('selenium-webdriver');

describe("Formulario de login", function () {

    it("Inicia sesión con éxito", async function () {

        let driver = await new Builder().forBrowser('chrome').build();
        try {
            // Navigate to Url
            await driver.get('http://localhost:3000/login');

            // Introduce email, contraseña y pulsa enter
            await driver.findElement(By.name('email')).sendKeys('pablosuamu@hotmail.com');
            await driver.findElement(By.name('password')).sendKeys('DxkUKk3Z@3890', Key.ENTER);

            let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

            console.log(await firstResult.getAttribute('textContent'));
        }
        finally{
            driver.quit();
        }

    })
})