import { test as base } from "@playwright/test";
import LoginPage from "@pages/loginPage";
import HomePage from "@pages/homePage";
import AddEmployeePage from "@pages/addEmployeePage";

interface PageFixtures {
  loginPage: LoginPage;
  homePage: HomePage;
  addEmployeePage: AddEmployeePage;
}

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  addEmployeePage: async ({ page }, use) => {
    await use(new AddEmployeePage(page));
  },
});

export { expect } from "@playwright/test";
