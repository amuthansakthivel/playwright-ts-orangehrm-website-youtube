import { expect, test } from "@playwright/test";
import { Env } from "@e2e/frameworkConfig/env";
import LoginPage from "@pages/loginPage";
import AddEmployeePage from "@pages/addEmployeePage";
import { getRandomEmployeeDetails } from "@e2e/testdata/random";

test("Add Employee", async ({ page }) => {
  await page.goto(Env.BASE_URL);
  const loginPage = new LoginPage(page);
  const homePage = await loginPage.login(Env.USERNAME, Env.PASSWORD);

  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.addEmployee(getRandomEmployeeDetails());

  await expect(addEmployeePage.successMessage).toBeVisible();
});
