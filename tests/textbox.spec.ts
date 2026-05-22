import { test, expect } from '@playwright/test';

//1.
test("Fill all fields corectly", async({page})=>{

    await page.goto("https://demoqa.com/elements");

    //Locators
    const textbox = page.getByText("Text Box");
    const username = page.locator("#userName");
    const email = page.locator("#userEmail");
    const curentaddr = page.locator("#currentAddress");
    const permanentaddr = page.locator("#permanentAddress");
    const submitButton = page.locator("#submit")
    const outputSection = page.locator("#output");

    //Test data
    const formData = {
        fullName: 'User',
        email: 'user@user.com',
        currentAddress: '123 Trenutna ulica',
        permanentAddress: '456 Stalna ulica'};

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    await textbox.click();
    await expect(page).toHaveURL("https://demoqa.com/text-box");

    //Fill fields
    await username.fill(formData.fullName);
    await email.fill(formData.email);
    await curentaddr.fill(formData.currentAddress);
    await permanentaddr.fill(formData.permanentAddress);

    //Verify fields values
    await expect(username).toHaveValue(formData.fullName);
    await expect(email).toHaveValue(formData.email);
    await expect(curentaddr).toHaveValue(formData.currentAddress);
    await expect(permanentaddr).toHaveValue(formData.permanentAddress);

    //Submit
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click({ force: true });

    //Output
    await expect (outputSection).toBeVisible();
    await expect(outputSection).toContainText(formData.fullName);
    await expect(outputSection).toContainText(formData.email);
    await expect(outputSection).toContainText(formData.currentAddress);
    await expect(outputSection).toContainText(formData.permanentAddress);   
})

//2.
test("Leave all fields empty and click submit", async({page})=>{

    await page.goto("https://demoqa.com/elements");

    //Locators
    const textbox = page.getByText("Text Box");
    const submitButton = page.locator("#submit")
    const outputSection = page.locator("#output");

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    await textbox.click();
    await expect(page).toHaveURL("https://demoqa.com/text-box");

    //Submit
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click({ force: true });

    //Output should stay hidden
    await expect (outputSection).not.toBeVisible();
})

//3.
test ("Fill all fields exept email", async({page})=>{

    await page.goto("https://demoqa.com/elements");

    //Locators
    const textbox = page.getByText("Text Box");
    const username = page.locator("#userName");
    const email = page.locator("#userEmail");
    const curentaddr = page.locator("#currentAddress");
    const permanentaddr = page.locator("#permanentAddress");
    const submitButton = page.locator("#submit")
    const outputSection = page.locator("#output");

    //Test data
    const formData = {
        fullName: 'User',
        email: 'user@user.com',
        currentAddress: '123 Trenutna ulica',
        permanentAddress: '456 Stalna ulica'}

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    await textbox.click();
    await expect(page).toHaveURL("https://demoqa.com/text-box");

    //Fill fields
    await username.fill(formData.fullName);
    await curentaddr.fill(formData.currentAddress);
    await permanentaddr.fill(formData.permanentAddress);

    //Verify fields values
    await expect(username).toHaveValue(formData.fullName);
    await expect(curentaddr).toHaveValue(formData.currentAddress);
    await expect(permanentaddr).toHaveValue(formData.permanentAddress);

    //Submit
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click({ force: true });

    //Output
    await expect (outputSection).toBeVisible();
    await expect(outputSection).toContainText(formData.fullName);
    await expect(outputSection).toContainText(formData.currentAddress);
    await expect(outputSection).toContainText(formData.permanentAddress);

    // Verify email was NOT submitted
    await expect(outputSection).not.toContainText('@');
})