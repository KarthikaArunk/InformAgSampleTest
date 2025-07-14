import { expect, Page, Locator } from '@playwright/test';;

export class PumpDetails {
    page: Page;
    pumpName: Locator;
    pumpType: Locator;
    pumpArea: Locator;
    pumpLatitude: Locator;
    pumpLongitude: Locator;
    flowRate: Locator;
    offSet: Locator;
    currentPressure: Locator;
    MinPressure: Locator;
    MaxPressure: Locator;
    newPumpButton: Locator;
    saveMessage: Locator;
    newPumpSaveButton: Locator;
    editPumpButton: Locator;
    saveEditButton: Locator;
    pumpNameEdit: Locator;
    pumpTypeEdit: Locator;
    pumpAreaEdit: Locator;
    latitudeEdit: Locator;
    longitudeEdit: Locator;
    offSetEdit: Locator;
    minReassureEdit: Locator;
    maxReassureEdit: Locator;
    editMessage: Locator;
    searchBox:Locator;
    searchButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.pumpName = page.getByPlaceholder("Pump Name");
        this.pumpType = page.getByPlaceholder("Pump Type");
        this.pumpArea = page.getByPlaceholder("Pump Area");
        this.pumpLatitude = page.getByPlaceholder("Pump Latitude");
        this.pumpLongitude = page.getByPlaceholder("Pump Longitude");
        this.flowRate = page.getByPlaceholder("Flow Rate");
        this.offSet = page.getByPlaceholder("Off Set");
        this.currentPressure = page.getByPlaceholder("Current Pressure");
        this.MinPressure = page.getByPlaceholder("Min Pressure");
        this.MaxPressure = page.getByPlaceholder("Max Pressure");
        this.newPumpButton = page.getByRole('button', { name: "New Pump" });
        this.saveMessage = page.getByText("New pump created successfully");
        this.newPumpSaveButton = page.getByRole('button', { name: "Save" });
        this.editPumpButton = page.getByRole('button', { name: "Edit Pump" });
        this.pumpNameEdit = page.getByPlaceholder("Pump Name Edit");
        this.pumpTypeEdit = page.getByPlaceholder("Pump Type Edit");
        this.pumpAreaEdit = page.getByPlaceholder("Pump Area Edit");
        this.latitudeEdit = page.getByPlaceholder("Pump Latitude Edit");
        this.longitudeEdit = page.getByPlaceholder("Pump Longitude Edit");
        this.offSetEdit = page.getByPlaceholder("Off Set Edit");
        this.minReassureEdit = page.getByPlaceholder("Min Pressure Edit");
        this.maxReassureEdit = page.getByPlaceholder("Max Pressure Edit");
        this.saveEditButton = page.getByRole('button', { name: "SaveEdit" });
        this.editMessage = page.getByText("Pump details edited successfully");
        this.searchBox = page.getByPlaceholder("Search Pump");
        this.searchButton = page.getByRole('button', { name: "Search" });
    }

    async createNewPump(baseUrl: string,pump_name: string, pump_type: string, pump_area: string, pump_latitude: string, pump_longitude: string, flow_rate: string, off_set: string, current_pressure: string, min_pressure: string, max_pressure: string) {
        try {
            await expect(this.newPumpButton).toBeVisible();
            await this.newPumpButton.click();
            await expect(this.pumpName).toBeVisible();
            await this.pumpName.click();
            await this.pumpName.fill(pump_name);
            await expect(this.pumpType).toBeVisible();
            await this.pumpType.click();
            await this.pumpType.fill(pump_type);
            await expect(this.pumpArea).toBeVisible();
            await this.pumpArea.click();
            await this.pumpArea.fill(pump_area);
            await expect(this.pumpLatitude).toBeVisible();
            await this.pumpLatitude.click();
            await this.pumpLatitude.fill(pump_latitude);

            await expect(this.pumpLongitude).toBeVisible();
            await this.pumpLongitude.click();
            await this.pumpLongitude.fill(pump_longitude);

            await expect(this.flowRate).toBeVisible();
            await this.flowRate.click();
            await this.flowRate.fill(flow_rate);

            await expect(this.offSet).toBeVisible();
            await this.offSet.click();
            await this.offSet.fill(off_set);

            await expect(this.currentPressure).toBeVisible();
            await this.currentPressure.click();
            await this.currentPressure.fill(current_pressure);

            await expect(this.MinPressure).toBeVisible();
            await this.MinPressure.click();
            await this.MinPressure.fill(min_pressure);

            await expect(this.MaxPressure).toBeVisible();
            await this.MaxPressure.click();
            await this.MaxPressure.fill(max_pressure);

            await expect(this.newPumpSaveButton).toBeVisible();
            await this.newPumpSaveButton.click();
            await expect(this.saveMessage).toBeVisible();
            await expect(this.page).toHaveURL(`${baseUrl}/PumpsOverviewPage`) //Assertion
        } catch (error) {
            console.error("Pump details are incorrect", error);
        }
    }

    async searchPump(pumpname:string){
        try {            
            await expect(this.searchBox).toBeVisible();
            await this.searchBox.click();
            await this.searchBox.fill(pumpname);
            await expect(this.searchButton).toBeVisible();
            await this.searchButton.click();
            await expect(this.page.getByText(pumpname)).toBeVisible();                        
        } catch (error) {
            console.error("Pump not found", error);
        }
    }

    async editPumpDetails(baseUrl: string,pumpname_Edit: string, pumptype_Edit: string, pumparea_Edit: string, latitude_Edit: string, longitude_Edit: string, offset_Edit: string, minreassure_Edit: string, maxreassure_Edit: string) {
        try {    
            await expect(this.page).toHaveURL(`${baseUrl}/EditPumpDetailsPage`); 
            await expect(this.editPumpButton).toBeVisible();
            await this.editPumpButton.click();      
            await expect(this.pumpNameEdit).toBeVisible();
            await this.pumpNameEdit.click();
            await this.pumpNameEdit.fill(pumpname_Edit);

            await expect(this.pumpTypeEdit).toBeVisible();
            await this.pumpTypeEdit.click();
            await this.pumpTypeEdit.fill(pumptype_Edit);

            await expect(this.pumpAreaEdit).toBeVisible();
            await this.pumpAreaEdit.click();
            await this.pumpAreaEdit.fill(pumparea_Edit);

            await expect(this.latitudeEdit).toBeVisible();
            await this.latitudeEdit.click();
            await this.latitudeEdit.fill(latitude_Edit);

            await expect(this.longitudeEdit).toBeVisible();
            await this.longitudeEdit.click();
            await this.longitudeEdit.fill(longitude_Edit);

            await expect(this.offSetEdit).toBeVisible();
            await this.offSetEdit.click();
            await this.offSetEdit.fill(offset_Edit);

            await expect(this.minReassureEdit).toBeVisible();
            await this.minReassureEdit.click();
            await this.minReassureEdit.fill(minreassure_Edit);

            await expect(this.maxReassureEdit).toBeVisible();
            await this.maxReassureEdit.click();
            await this.maxReassureEdit.fill(maxreassure_Edit);

            await expect(this.saveEditButton).toBeVisible();
            await this.saveEditButton.click();
            await expect(this.editMessage).toBeVisible();

        } catch (error) {
            console.error("Pump details are not edited", error);
        }
    }
}