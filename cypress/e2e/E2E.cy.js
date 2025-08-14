/// <reference types ="cypress" />
import { faker } from "@faker-js/faker";
import pages from "../support/pages/pagesexport";

const devices = ["desktop", "iphone-x"];

devices.forEach((element) => {
  describe("Teste de E2E - simulação real de uso automatizado", () => {
    beforeEach(() => {
      if (element !== "desktop") {
        cy.viewport(element);
      }
      cy.visit("./");
    });

    it("Teste 1 - Login de usuário anteriormente cadastrado", () => {
      pages.Login("9vH9o@example.com", "123456");
      pages.checkLoginSucess();
    });
    it("Teste 2 - Simulando uma compra no site", () => {
      const nome = faker.person.firstName();
      const sobrenome = faker.person.lastName();
      const email = faker.internet.email();

      pages.Login("9vH9o@example.com", "123456");
      pages.checkLoginSucess();

      cy.get(":nth-child(4) > .offcanvas-toggle").click();
      cy.get("#menuShopText").click();
      cy.get(
        ":nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(5) > a"
      ).click();

      cy.get(
        ":nth-child(2) > .product_wrappers_one > .content > .title > a"
      ).click();
      cy.get(".links_Product_areas > .theme-btn-one").click();

      cy.get(":nth-child(3) > .offcanvas-toggle > .fa", { timeout: 5000 })
        .should("be.visible")
        .click();

      cy.get(
        ".offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one"
      ).click();

      pages.checkoutFinish(
        nome,
        sobrenome,
        "Qazando",
        email,
        "usa",
        "Aland Islands",
        "12345678",
        "Rua 1",
        "Rua da pizzaria mestre"
      );
    });
  });
});
