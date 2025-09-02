// cy.get("YOUR-SELECTOR").wait(1000).click();

describe("Quick Tip: .wait() a Second", () => {
  it("Using .wait in a real world example", () => {
    cy.visit("https://coffee-cart.app/");
    cy.get("[data-test='Espresso']").wait(1000).click();
  });
});
