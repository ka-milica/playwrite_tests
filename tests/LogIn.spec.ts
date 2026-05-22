import { test, expect } from '@playwright/test';

//1.
test ("Log in User", async ({page})=>{

    await page.goto("https://demoqa.com/login");

    const userName = page.locator("#userName");
    const password = page.locator("#password");
    const loginButton = page.locator("#login");

    //Fill all fields
    await userName.fill("Mici1234");
    await password.fill("Prolece123!");

    //Verify fields values
    await expect(userName).toHaveValue("Mici1234");
    await expect(password).toHaveValue("Prolece123!");

    //Click login
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await loginButton.click();   
    await expect(page).toHaveURL("https://demoqa.com/profile")
})
    
//2.
test ("Wrong Username", async ({page})=>{

    await page.goto("https://demoqa.com/login");

    const userName = page.locator("#userName");
    const password = page.locator("#password");
    const loginButton = page.locator("#login");

    //Fill all fields
    await userName.fill("Mici12");
    await password.fill("Prolece123!");

    //Verify fields values
    await expect(userName).toHaveValue("Mici12");
    await expect(password).toHaveValue("Prolece123!");

    //Click login
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

     // Verify still on login page
    await expect(page).toHaveURL('https://demoqa.com/login');

    //Verify that message 'Invalid username or password!' appears
    await expect(page.getByText("Invalid username or password!")).toBeVisible()
})

//3.
test ("Wrong password", async ({page})=>{

    await page.goto("https://demoqa.com/login");

    const userName = page.locator("#userName");
    const password = page.locator("#password");
    const loginButton = page.locator("#login");

    //Fill all fields
    await userName.fill("Mici1234");
    await password.fill("Prolece1!");

    //Verify fields values
    await expect(userName).toHaveValue("Mici1234");
    await expect(password).toHaveValue("Prolece1!");

    //Click login
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    // Verify still on login page
    await expect(page).toHaveURL('https://demoqa.com/login');

    //Verify that message 'Invalid username or password!' appears
    await expect(page.getByText("Invalid username or password!")).toBeVisible()
})

//4.
test ("Login with empty fields", async ({page})=>{

    await page.goto("https://demoqa.com/login");

    const userName = page.locator("#userName");
    const password = page.locator("#password");
    const loginButton = page.locator("#login");

    // Verify fields are empty
    await expect(userName).toHaveValue('');
    await expect(password).toHaveValue('');

    //Click login
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    // Verify still on login page
    await expect(page).toHaveURL('https://demoqa.com/login');

    // Verify invalid field styling appears
    await expect(userName).toHaveClass(/is-invalid/);
    await expect(password).toHaveClass(/is-invalid/);

})