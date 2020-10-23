describe("Test", () => {
  it("input", () => {
    cy.visit("https://www.google.com");
    cy.get(".gLFyf").first().type("Cypress");
  });
});
