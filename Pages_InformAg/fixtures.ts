import { test as base } from '@playwright/test';
import { LoginInformAg } from './login';
import { PumpDetails } from './pumpDetails';
import { PumpInspection } from './pumpInspection';

export const test = base.extend<{ login: LoginInformAg, pumpdetails: PumpDetails , pumpinspection:PumpInspection}>({
    login: async ({ page }, use) => {
        const login = new LoginInformAg(page);
        await use(login);
    },  
    
    pumpdetails: async ({ page }, use) => {
        const pumpdetails = new PumpDetails(page);
        await use(pumpdetails);
    },

    pumpinspection: async ({page}, use) =>{
        const pumpinspection = new PumpInspection(page);
        await use(pumpinspection);
    }
})