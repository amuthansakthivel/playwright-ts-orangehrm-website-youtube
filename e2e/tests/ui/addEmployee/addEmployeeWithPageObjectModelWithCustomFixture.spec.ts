import { test, expect } from "@e2e/fixtures/customFixtures";
import { Env } from "@e2e/frameworkConfig/env";
import { getRandomEmployeeDetails } from "@e2e/testdata/random";

test("Add Employee", async ({ loginPage, homePage, addEmployeePage }) => {
  await loginPage.visit();
  await loginPage.login(Env.USERNAME, Env.PASSWORD);
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  await addEmployeePage.addEmployee(getRandomEmployeeDetails());
  await expect(addEmployeePage.successMessage).toBeVisible();
});
