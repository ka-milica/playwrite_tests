import { test, expect } from '@playwright/test';

//1.
test ("Add new record", async({page})=>{

    await page.goto("https://demoqa.com/webtables");

//Locators
    const addbutton = page.locator("#addNewRecordButton");
    const firstname = page.locator("#firstName");
    const lastname = page.locator("#lastName");
    const email = page.locator("#userEmail");
    const age = page.locator("#age");
    const salary = page.locator("#salary");
    const department = page.locator("#department");
    const submitButton = page.locator("#submit");
    const modal = page.locator('.modal-content');
    const modalTitle = page.locator('#registration-form-modal');
    const table = page.locator('.rt-td');


//Form data
    const formData = {
        firstname: "Djurdja",
        lastname: "Djurdjic",
        email: "dju@rdj.com",
        age: "25",
        salary: "12345",
        department: "Legal",
    };
//Adding new record
    await expect(addbutton).toBeVisible();
    await expect(addbutton).toBeEnabled();
    await addbutton.click();

// Modal
    await expect(modal).toBeVisible();
    await expect(modalTitle).toHaveText('Registration Form');

//Fill the filds
    await firstname.fill(formData.firstname);
    await lastname.fill(formData.lastname);
    await email.fill(formData.email);
    await age.fill(formData.age);
    await salary.fill(formData.salary);
    await department.fill(formData.department);

//Verify fields value
    await expect(firstname).toHaveValue(formData.firstname);
    await expect(lastname).toHaveValue(formData.lastname);
    await expect(email).toHaveValue(formData.email);
    await expect(age).toHaveValue(formData.age);
    await expect(salary).toHaveValue(formData.salary);
    await expect(department).toHaveValue(formData.department);

//Submit
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click({ force: true });
    await expect(modal).not.toBeVisible();


//Verify is new register is in table
    const row = page.locator('.rt-tr-group').filter({ hasText: formData.firstname });
    await expect(row).toContainText(formData.firstname);


})