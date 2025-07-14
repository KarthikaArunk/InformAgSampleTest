import { Page, expect, Locator } from '@playwright/test';

export class LoginInformAg {
    page: Page;
    userName: Locator;
    userPassword: Locator;
    loginButton: Locator;
    errorMessageDisplay: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder("Username");
        this.userPassword = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button', { name: "Login" });
        this.errorMessageDisplay = page.getByText("Invalid email or password");
    }

    //Login method to fill in the username and password fields and click the login button
    async loginDetails(username: string, password: string, errorMessage: string) {

        try {
            await expect(this.userName).toBeVisible(); //Assertion to check if the username field is visible
            await this.userName.click();
            await this.userName.fill(username);

            await expect(this.userPassword).toBeVisible(); //Assertion to check if the password field is visible
            await this.userPassword.click();
            await this.userPassword.fill(password);

            await expect(this.loginButton).toBeVisible(); //Assertion to check if the login button is visible
            await this.loginButton.click();

            if ((username !== 'abcd@sample.com') || (password !== 'abc23456@')) {
                await expect(this.errorMessageDisplay).toBeVisible(); 
                await expect(this.errorMessageDisplay).toHaveText(errorMessage);
            }
        } catch (error) {
            console.error("Login credentials are incorrect", error);
        }
    }
}