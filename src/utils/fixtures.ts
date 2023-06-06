import {test as base} from '@playwright/test';
import {MainPage} from "../pages/main.page";

type MyFixtures = {
    mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({page}, use) => {
        const homePage = new MainPage(page);
        await use(homePage);
    },
});

export {expect} from '@playwright/test';