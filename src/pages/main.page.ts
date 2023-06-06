import {Locator, Page} from 'playwright';

export class MainPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getPageTitle(): Locator {
        return this.page.locator('h1');
    }

    getMovieTitle(): Locator {
        return this.page.locator('id=title');
    }

    getMovieRating(): Locator {
        return this.page.locator('id=rating');
    }

    getMovieVotes(): Locator {
        return this.page.locator('id=votes');
    }

    getSearchInput(): Locator {
        return this.page.locator('id=input');
    }

    getSearchButton(): Locator {
        return this.page.locator('id=search');
    }

    getPageAlert(): Locator {
        return this.page.getByRole('alert');
    }
}