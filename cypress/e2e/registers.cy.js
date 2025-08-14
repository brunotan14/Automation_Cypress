/// <reference types="cypress" />
import { fa, faker } from "@faker-js/faker";
import pages from "../support/pages/pagesexport";

describe("Testes na área de cadastro", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.visit("/");
  });
  // const user_name = "Bruno";
  // const password = "123456";
  it(" Caso de teste 1 - Cadastro de Usuário com sucesso", () => {
    pages.cadastro(faker.person.fullName(), "Bruno@gmail.com", faker.internet.password());
    cy.get(".swal2-popup").should("be.visible");
  });

  it("Caso de teste 2 - Cadastro com email ja cadastrado", () => {
    pages.cadastro(faker.person.fullName(), "Bruno@gmail.com", faker.internet.password());
    cy.get(".swal2-popup").should("be.visible");
  });

  it("Caso de teste 3 - Cadastro sem preencher o campo nome", () => {
    pages.cadastro("", faker.internet.email(), faker.internet.password());
    pages.ErrorMessageRegister("O campo nome deve ser prenchido");
  });

  it("Caso de teste 4 - cadastro com email inválido", () => {
    pages.cadastro(faker.person.fullName(), "bruno@33332", faker.internet.password());
    pages.ErrorMessageRegister(
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Caso de teste 5 - cadastro com senha vazia ou inválida", () => {
    pages.cadastro(faker.person.fullName(), faker.internet.email(), "");
    pages.ErrorMessageRegister("O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Caso de teste 6 - Cadastro de usuário utilizando dados randomicos", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    pages.cadastro(name, email, password);
    pages.checkRegisterSucess(name);
  });
});
