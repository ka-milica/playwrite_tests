import { test, expect } from '@playwright/test';

test ("Register User", async ({page})=>{
  
    await page.goto("https://demoqa.com/register");

//Locators
    const firstName = page.locator("#firstname");
    const lastName = page.locator("#lastname");
    const userName = page.locator("#userName");
    const password = page.locator("#password");
    const registerButton = page.locator("#register");


//Fill fields
    await firstName.fill("Pera");
    await lastName.fill("Peric");
    await userName.fill("perica");
    await password.fill("1!Qwertyu");

//Verify fields values
    await expect(firstName).toHaveValue("Pera");
    await expect(lastName).toHaveValue("Peric");
    await expect(userName).toHaveValue("perica");
    await expect(password).toHaveValue("1!Qwertyu");

//Click Register button
    await expect(registerButton).toBeVisible();
    await expect(registerButton).toBeEnabled();
    await registerButton.click()
    


})