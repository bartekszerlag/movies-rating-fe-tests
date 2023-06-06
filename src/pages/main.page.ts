import { Page } from 'playwright';

export class MainPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getPageTitle() {
        return this.page.locator('h1');
    }

    getMovieTitle() {
        return this.page.locator('id=title');
    }

    getMovieRating() {
        return this.page.locator('id=rating');
    }

    getMovieVotes() {
        return this.page.locator('id=votes');
    }

    getSearchInput() {
        return this.page.locator('id=input');
    }

    getSearchButton() {
        return this.page.locator('id=search');
    }

    getPageAlert() {
        return this.page.getByRole('alert');
    }
}