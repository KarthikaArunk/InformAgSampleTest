
import { test } from '../Pages_InformAg/fixtures';
import { expect } from '@playwright/test';

const testData = JSON.parse(JSON.stringify('../TestData/informAgData.json')); //Initialize JSON data

test.describe("InformAg Automation Tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.baseUrl!); //Navigate to the base Url
        await expect(page).toHaveTitle(testData.pageTitle); //Assertion to check if the title of the page is correct
    })

    test.afterAll(async ({ page }) => {
        await page.close();
    })

    test("login with valid credentials", async ({ page, login }) => {
        await login.loginDetails(process.env.userEmail!, process.env.userPassword!, testData.errorMessage);  //Login with valid credentials
        await expect(page).toHaveURL(`${process.env.baseUrl}/overviewPage`); //Assertion
    })

    test("Login with invalid credentials", async ({ page, login }) => {
        await login.loginDetails(process.env.invalidEmail!, process.env.invalidPassword!, testData.errorMessage); //Login with invalid credentials
        await expect(page).toHaveURL(`${process.env.baseUrl}/LoginPage`); //Assertion
    })

    test("Create a new Pump", async ({ page, login, pumpdetails }) => {
        await login.loginDetails(process.env.userEmail!, process.env.userPassword!, testData.errorMessage); //Login
        await expect(page).toHaveURL(`${process.env.baseUrl}/PumpsOverviewPage`); //Assertion

        await pumpdetails.createNewPump(process.env.baseUrl!, testData.pumpName, testData.pumpType, testData.pumpArea, testData.latitude, testData.longitude, testData.flowRate, testData.offSet, testData.currentPressure, testData.minPressure, testData.maxPressure); //Create a new pump
    })

    test("Edit a pump", async ({ page, login, pumpdetails }) => {
        await login.loginDetails(process.env.userEmail!, process.env.userPassword!, testData.errorMessage);  //Login
        await expect(page).toHaveURL(`${process.env.baseUrl}/PumpsOverviewPage`); //Assertion

        await pumpdetails.searchPump(testData.pumpName);  //Search for the pump created in the previous list

        await pumpdetails.editPumpDetails(process.env.baseUrl!, testData.pumpnameEdit, testData.pumptypeEdit, testData.pumpareaEdit, testData.latitudeEdit, testData.longtitudeEdit, testData.offsetEdit, testData.minreassureEdit, testData.maxreassureEdit); //Edit the pump details
        await expect(page).toHaveURL(`${process.env.baseUrl}/PumpsOverviewPage`); //Assertion
    })

    test("Pump Inspection", async ({ page, login, pumpdetails, pumpinspection }) => {
        await login.loginDetails(process.env.userEmail!, process.env.userPassword!, testData.errorMessage);  //Login
        await expect(page).toHaveURL(`${process.env.baseUrl}/PumpsOverviewPage`); //Assertion

        await pumpdetails.searchPump(testData.pumpName);

        await pumpinspection.pumpInspection(process.env.baseUrl!, testData.pumpId, testData.pumpStatus, testData.lastUpdated, testData.type, testData.area, testData.latitude, testData.longitude, testData.flowRate, testData.offSet, testData.currentPressure, testData.minPressure, testData.maxPressure, testData.pumpMarker, testData.chartType, testData.pressureOverTimeValue); //Perform pump inspection
    })
})