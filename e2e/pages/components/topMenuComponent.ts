import { Page } from "@playwright/test";

class TopMenuComponent {
  constructor(private readonly page: Page) {}

  private readonly topMenu = (menuName: string) =>
    this.page.getByRole("link", { name: menuName });

  async selectTopMenuItem(menuItem: string) {
    await this.topMenu(menuItem).click();
  }
}

export default TopMenuComponent;
