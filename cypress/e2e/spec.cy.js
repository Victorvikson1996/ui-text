import {
  login,
  verifyItemsSortedAtoZ,
  verifyItemsSortedZtoA,
  logout
} from '../integration/TestFunction';

describe('Sauce Demo UI Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    login();
  });

  afterEach(() => {
    logout(); // Log out after each test
    login(); // Sign in again after logout
  });

  it('should verify items sorted by Name (A -> Z)', () => {
    verifyItemsSortedAtoZ();
    cy.get('.inventory_item_name')
      .should('have.length.gt', 0)
      .each(($el, index, $list) => {
        if (index < $list.length - 1) {
          expect(
            $el.text().localeCompare($list.eq(index + 1).text(), 'en', {
              sensitivity: 'base'
            })
          ).to.be.lte(0);
        }
      });
  });

  it('should verify items sorted by Name (Z -> A)', () => {
    verifyItemsSortedZtoA();
    cy.get('.inventory_item_name')
      .should('have.length.gt', 0)
      .each(($el, index, $list) => {
        if (index < $list.length - 1) {
          expect(
            $el.text().localeCompare($list.eq(index + 1).text(), 'en', {
              sensitivity: 'base'
            })
          ).to.be.gte(0);
        }
      });
  });
});

// import {
//   login,
//   verifyItemsSortedAtoZ,
//   verifyItemsSortedZtoA
// } from '../integration/TestFunction';

// describe('Sauce Demo UI Tests', () => {
//   it('Logs in and verifies item sorting', () => {
//     // Step 1: Go to the site
//     cy.visit('https://www.saucedemo.com/');

//     // Step 2: Log in to the site
//     login();

//     // Step 3: Verify items are sorted by Name (A -> Z)
//     verifyItemsSortedAtoZ();

//     // Step 4: Change the sorting to Name (Z -> A) and verify
//     verifyItemsSortedZtoA();
//   });
// });

// import {
//   login,
//   verifyItemsSortedAtoZ,
//   verifyItemsSortedZtoA
// } from '../integration/TestFunction';

// describe('Sauce Demo Sorting Tests', () => {
//   beforeEach(() => {
//     // Visit the Sauce Demo website before each test to ensure a fresh start
//     cy.visit('https://www.saucedemo.com/');
//     login();
//   });

//   afterEach(() => {
//     // Optionally reset the state by navigating away or refreshing the page
//     cy.visit('https://www.saucedemo.com/');
//   });

//   it('Verifies items are sorted by Name (A -> Z)', () => {
//     verifyItemsSortedAtoZ();
//   });

//   it('Changes sorting to Name (Z -> A) and verifies', () => {
//     verifyItemsSortedZtoA();
//   });
// });

// import {
//   login,
//   verifyItemsSortedAtoZ,
//   verifyItemsSortedZtoA
// } from '../integration/TestFunction';

// describe('Sauce Demo Sorting Tests', () => {
//   beforeEach(() => {
//     login();
//   });

//   it('Verifies items are sorted by Name (A -> Z)', () => {
//     verifyItemsSortedAtoZ();
//   });

//   it('Changes sorting to Name (Z -> A) and verifies', () => {
//     verifyItemsSortedZtoA();
//   });
// });
