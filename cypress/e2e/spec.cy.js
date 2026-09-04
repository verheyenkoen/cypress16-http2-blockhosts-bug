/// <reference types="cypress" />
describe("The blockHosts config in HTTP/2 mode", () => {
  it("should block the specified hosts", () => {
    cy.visit("/");

    cy.get("#change-me").should("contain.text", "works");
  });
});
