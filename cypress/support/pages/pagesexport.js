/// <reference types ="cypress" />

const elements = {
  buttons: {
    register: "#btnRegister",
    login: "#btnLogin",
    savecheckout: ".checkout-area-bg > .theme-btn-one",
    finishcheckout: ":nth-child(2) > :nth-child(2) > .theme-btn-one",
  },
};

export default {
  cadastro(nome, email, senha) {
    cy.get(".fa-lock").should("be.visible").click();
    if (nome) {
      cy.get("#user").type(nome);
    }
    cy.get("#email").type(email);
    if (senha) {
      cy.get("#password").type(senha);
    }
    cy.get(elements.buttons.register).click();
  },

  Login(email, senha) {
    cy.get(".fa-user").should("be.visible").click();
    if (email) {
      cy.get("#user").type(email);
    }
    if (senha) {
      cy.get("#password").type(senha);
    }
    cy.get(elements.buttons.login).should("be.visible").click();
  },

  checkRegisterSucess(name) {
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-html-container", { timeout: 3000 }).should(
      "have.text",
      `Bem-vindo ${name}`
    );
  },

  ErrorMessageRegister(mensagem) {
    cy.get(".errorLabel").should("have.text", mensagem);
  },
  checkLoginSucess() {
    cy.get(".swal2-popup").should("be.visible");
    cy.get(".swal2-confirm").should("be.visible").click();
  },

  checkoutFinish(nome,sobrenome,company,email,country,city,code,adress,aditionalMessage) {
    if (nome) {
      cy.get("#fname").type(nome);
    }
    cy.get("#fname").type(nome);
    cy.get("#lname").type(sobrenome);
    cy.get("#cname").type(company);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#zip").type(code);
    cy.get("#faddress").type(adress);
    if (aditionalMessage) {
      cy.get("#messages").type(aditionalMessage);
    }
    cy.get(elements.buttons.savecheckout).should("be.visible").click();

    cy.get(".payment_method").then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click({ force: true });
    });
    cy.get(elements.buttons.finishcheckout).should("be.visible").click();
    cy.get(".offer_modal_left > h3").should("be.visible");
  },
};
