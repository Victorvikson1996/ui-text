beforeEach(() => {
  // Ignore API calls globally
  cy.intercept('POST', 'https://events.backtrace.io/api/*', {
    statusCode: 401, // Adjust as needed
    body: 'Global intercept - Request ignored.'
  });
});
