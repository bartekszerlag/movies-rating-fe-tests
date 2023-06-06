import {expect, test} from '../utils/fixtures';

test.describe('SEARCH MOVIES', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    })

    test('should have default values', async ({mainPage}) => {
        await expect(mainPage.getPageTitle()).toHaveText('🎬 what is my rating ?');
        await expect(mainPage.getMovieTitle()).toHaveText('title');
        await expect(mainPage.getMovieRating()).toContainText('rating');
        await expect(mainPage.getMovieVotes()).toContainText('votes');
    });

    test('should find movie with rating', async ({mainPage}) => {
        const title = 'Friends';
        await mainPage.getSearchInput().fill(title);
        await mainPage.getSearchButton().click();

        await expect(mainPage.getMovieTitle()).toHaveText(title.toUpperCase());
        await expect(mainPage.getMovieRating()).not.toBeEmpty();
        await expect(mainPage.getMovieVotes()).not.toBeEmpty();
    });

    test('should not find movie', async ({mainPage}) => {
        const title = 'notexistingmovie';
        await mainPage.getSearchInput().fill(title);
        await mainPage.getSearchButton().click();

        await expect(mainPage.getMovieTitle()).toHaveText('title');
        await expect(mainPage.getMovieRating()).toContainText('rating');
        await expect(mainPage.getMovieVotes()).toContainText('votes');
        await expect(mainPage.getPageAlert()).toContainText(`Movie "${title}" not found`)
    });
})