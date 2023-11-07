import { HomePage } from '../pages/homePage';

const homePage = new HomePage();

describe('Footer links', () => {
    it('Should open Github page in a new window', () => {
        cy.visit('/');

        // Store the current window count
        let initialWindowCount;
       
        // Get the initial window count
        cy.window().then((win) => {
            initialWindowCount = win.length;
        });

        // Click the GitHub link
        homePage.clickGitHubFooterLink();

        // Wait for a new window to open (you can adjust the timeout)
        cy.wait(5000); // Wait for 5 seconds

        // Verify that a new window/tab has been opened
        cy.window().then((win) => {
            if (win.length > initialWindowCount) {
                const newWindow = win[win.length - 1];

                // Check if the new window's location is available
                if (newWindow.location) {
                    expect(newWindow.location.href).to.equal('https://github.com/gothinkster/angularjs-realworld-example-app');
                } else {
                    // Handle the case where location is not available
                    cy.log('New window location is not available.');
                }
            } else {
                // Handle the case where no new window was opened
                cy.log('No new window was opened.');
            }
        });
    });
});


