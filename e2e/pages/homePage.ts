import { Page } from "@playwright/test";
import LeftMenuComponent from "./components/leftMenuComponent";
import TopMenuComponent from "./components/topMenuComponent";

class HomePage {
  //left menu component and top menu component

  private leftMenuComponent: LeftMenuComponent;
  private topMenuComponent: TopMenuComponent;

  constructor(private readonly page: Page) {
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }

  getLeftMenuComponent() {
    return this.leftMenuComponent;
  }

  getTopMenuComponent() {
    return this.topMenuComponent;
  }
}

export default HomePage;
