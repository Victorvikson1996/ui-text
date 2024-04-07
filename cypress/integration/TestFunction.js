export const login = () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html'); // Confirm successful login
};

export const verifyItemsSortedAtoZ = () => {
  cy.get('.product_sort_container').select('az');
  cy.get('.inventory_item_name').then(($names) => {
    const sortedNames = $names
      .map((index, html) => html.innerText)
      .get()
      .sort();
    expect($names.map((index, html) => html.innerText).get()).to.deep.eq(
      sortedNames
    );
  });
};

export const verifyItemsSortedZtoA = () => {
  cy.get('.product_sort_container').select('za');
  cy.get('.inventory_item_name').then(($names) => {
    const reverseSortedNames = $names
      .map((index, html) => html.innerText)
      .get()
      .sort()
      .reverse();
    expect($names.map((index, html) => html.innerText).get()).to.deep.eq(
      reverseSortedNames
    );
  });
};

// Function to log out
export const logout = () => {
  cy.get('#react-burger-menu-btn').click();
  cy.contains('Logout').click();
};

// // Function to login
// export const login = () => {
//   cy.get('[data-test="username"]').type('standard_user');
//   cy.get('[data-test="password"]').type('secret_sauce');
//   cy.get('[data-test="login-button"]').click();
//   cy.url().should('include', '/inventory.html'); // Confirm successful login
// };

// // Function to verify items are sorted by Name (A -> Z)
// export const verifyItemsSortedAtoZ = () => {
//   cy.get('.product_sort_container').select('az');
//   cy.get('.inventory_item_name').then(($names) => {
//     const sortedNames = $names
//       .map((index, html) => html.innerText)
//       .get()
//       .sort();
//     expect($names.map((index, html) => html.innerText).get()).to.deep.eq(
//       sortedNames
//     );
//   });
// };

// // Function to change the sorting to Name (Z -> A) and verify
// export const verifyItemsSortedZtoA = () => {
//   cy.get('.product_sort_container').select('za');
//   cy.get('.inventory_item_name').then(($names) => {
//     const reverseSortedNames = $names
//       .map((index, html) => html.innerText)
//       .get()
//       .sort()
//       .reverse();
//     expect($names.map((index, html) => html.innerText).get()).to.deep.eq(
//       reverseSortedNames
//     );
//   });
// };
