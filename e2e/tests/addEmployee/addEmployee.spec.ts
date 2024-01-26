import {expect, test} from "@playwright/test";

test("Add Employee", async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('sdfhsd');
    await page.getByPlaceholder('Middle Name').fill('skjdfsf');
    await page.getByPlaceholder('Last Name').fill('sfgdsdf');
    await page.locator('form').getByRole('textbox').nth(4).fill('965');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(/Successfully Saved/i)).toBeVisible();
});