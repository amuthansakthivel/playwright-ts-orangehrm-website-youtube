import { Page } from "@playwright/test";
import { EmployeeDetails } from "../testdata/orangeHrmInterfaces";

class AddEmployeePage {
  constructor(private readonly page: Page) {}

  private readonly firstNameTextBox = this.page.getByRole("textbox", {
    name: "First Name",
  });
  private readonly lastNameTextBox = this.page.getByRole("textbox", {
    name: "Last Name",
  });
  private readonly middleNameTextBox = this.page.getByRole("textbox", {
    name: "Middle Name",
  });
  private readonly idTextBox = this.page
    .locator("form")
    .getByRole("textbox")
    .nth(4);
  private readonly saveButton = this.page.getByRole("button", { name: "Save" });
  public readonly successMessage = this.page.getByText(/Successfully Saved/i);

  async addEmployee(employeeDetails: EmployeeDetails) {
    await this.firstNameTextBox.fill(employeeDetails.firstName);
    await this.lastNameTextBox.fill(employeeDetails.lastName);
    await this.middleNameTextBox.fill(employeeDetails.middleName);
    await this.idTextBox.fill(employeeDetails.employeeId);
    await this.saveButton.click();
  }
}

export default AddEmployeePage;
