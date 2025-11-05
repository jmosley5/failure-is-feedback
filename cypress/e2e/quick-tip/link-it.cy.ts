// this test file is affected by the index.tsx file

describe("Index page button", () => {
  it("clicks the button on the index page", () => {
    cy.visit("/");
    cy.get('[data-testid="button-example"]').click();
  });
});
