import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: 'src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        headless: true,
        baseURL: 'https://moviesratingapp.netlify.app/',
        trace: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
    ],
});
