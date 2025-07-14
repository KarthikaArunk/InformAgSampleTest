import { expect, Page, Locator } from '@playwright/test';

export class PumpInspection {
    page: Page;
    pumpId: Locator;
    pumpStatus: Locator;
    lastUpdated: Locator;
    type: Locator;
    area: Locator;
    latitudeLocation: Locator;
    longitudeLocation: Locator;
    flowrRate: Locator;
    offSet: Locator;
    currentPressure: Locator;
    minPressure: Locator;
    maxPressure: Locator;
    mapImage: Locator;
    chartType: Locator;
    pressureOverTimeText: Locator;
    pressureOverTimeValue: Locator;
    chart: Locator;
    pumpMapMarker: Locator;
    pumpMapMarkerPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pumpId = page.getByPlaceholder("Pump ID");
        this.pumpStatus = page.getByPlaceholder("Pump Status");
        this.lastUpdated = page.getByPlaceholder("Last Updated");
        this.type = page.getByPlaceholder("Type");
        this.area = page.getByPlaceholder("Area");
        this.latitudeLocation = page.getByPlaceholder("latitude Location");
        this.longitudeLocation = page.getByPlaceholder("longitude Location");
        this.flowrRate = page.getByPlaceholder("Flow Rate");
        this.offSet = page.getByPlaceholder("Off Set");
        this.currentPressure = page.getByPlaceholder("Current Pressure");
        this.minPressure = page.getByPlaceholder("Min Pressure");
        this.maxPressure = page.getByPlaceholder("Max Pressure");
        this.mapImage = page.getByRole('img', { name: "Map Image" });
        this.pumpMapMarker = page.locator('.pump-map-marker');
        this.chartType = page.getByPlaceholder("Chart Type");
        this.pumpMapMarkerPopup = page.locator('.pump-map-marker-popup');
    }

    async pumpInspection(baseUrl: string, pumpid: string, pumpstatus: string, lastupdated: string, type: string, area: string, latitude: string, longitude: string, flowrate: string, offset: string, currentpressure: string, minpressure: string, maxpressure: string, pumpmarker: string, chart_type: string, pressureover_time: string) {
        try {
            await expect(this.page).toHaveURL(`${baseUrl}/PumpInspectionPage`);
            await expect(this.pumpId).toBeVisible();
            await expect(this.pumpId).toContainText(pumpid);

            await expect(this.pumpStatus).toBeVisible();
            await expect(this.pumpStatus).toContainText(pumpstatus);

            await expect(this.lastUpdated).toBeVisible();
            await expect(this.lastUpdated).toContainText(lastupdated);

            await expect(this.type).toBeVisible();
            await expect(this.type).toContainText(type);

            await expect(this.area).toBeVisible();
            await expect(this.area).toContainText(area);

            await expect(this.latitudeLocation).toBeVisible();
            await expect(this.latitudeLocation).toContainText(latitude);

            await expect(this.longitudeLocation).toBeVisible();
            await expect(this.longitudeLocation).toContainText(longitude);

            await expect(this.flowrRate).toBeVisible();
            await expect(this.flowrRate).toContainText(flowrate);

            await expect(this.offSet).toBeVisible();
            await expect(this.offSet).toContainText(offset);

            await expect(this.currentPressure).toBeVisible();
            await expect(this.currentPressure).toContainText(currentpressure);

            await expect(this.minPressure).toBeVisible();
            await expect(this.minPressure).toContainText(minpressure);

            await expect(this.maxPressure).toBeVisible();
            await expect(this.maxPressure).toContainText(maxpressure);

            await expect(this.mapImage).toBeVisible();

            await expect(this.pumpMapMarker).toBeVisible();
            await expect(this.pumpMapMarker).toContainText(pumpmarker);

            await this.pumpMapMarker.click();
            await expect(this.pumpMapMarkerPopup).toBeVisible();

            await expect(this.chartType).toBeVisible();
            await this.chartType.click();
            await this.chartType.selectOption(chart_type);
            await expect(this.chartType).toHaveValue(chart_type);
            await expect(this.chart).toBeVisible();

            await expect(this.pressureOverTimeText).toBeVisible();
            await expect(this.pressureOverTimeValue).toBeVisible();
            await expect(this.pressureOverTimeValue).toHaveValue(pressureover_time);
        } catch (error) {
            console.error("Error in pumpInspection: ", error);
        }
    }
}