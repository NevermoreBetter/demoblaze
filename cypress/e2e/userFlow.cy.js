/// <reference types='cypress' />
import { faker } from "@faker-js/faker";

describe("demoblaze", () => {
 const username = faker.internet.userName();
 const password = faker.internet.password();
 beforeEach(() => {
  cy.visit("/");
 });

 it("should register with valid data", () => {
  cy.get("#signin2").click();
  cy.wait(500);
  cy.get("#sign-username").type(username);
  cy.get("#sign-password").type(password);
  cy.contains("button", "Sign up").click();
  cy.on("window:alert", (str) => {
   expect(str).to.equal(`Sign up successful.`);
  });

  cy.get("#login2").click();
  cy.wait(500);
  cy.get("#loginusername").type(username);
  cy.get("#loginpassword").type(password);
  cy.contains("button", "Log in").click();
  cy.wait(2000);
  cy.contains("a", "Samsung galaxy s6").click();

  cy.get(".btn btn-success btn-lg").should("be.visible");
  cy.get(".btn btn-success btn-lg").click();

  cy.contains("a", "Cart").click();

  cy.get("tbody tr").should("have.length", 1);
 });
});
