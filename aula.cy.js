/// <reference types ="cypress" /> 
 // se por acaso eu quiser o texto de algum elemento para possívelmente usa-lo futuramente, basta usar o comando abaixo como exemplo
 // estou pegando o texto de uma paginação que tem para encontra-lo tenho que mencionar a div pai e depois a filha
 // cy.get('.top_header_left > p').then((texto) => {console.log(texto.text()})

 //simular um enter com o comando abaixo
 // cy.get('#email').type('9vH9o@example.com{enter}')

 //realizar um click duplo com o comando abaixo
 // cy.get('#email').dblclick()

 //selecionar um elemento que ta dentro de uma div
 // cy.get('.footer_one_widget').contains('Checkout View Two').click()
 // cy.get('#country').select('United States')

 //marcando um checkbox com o comando abaixo
 // cy.get('#newsletter').check() e pra desmarcar usa o uncheck()

 //asserts
 // .should('contains', 'O campo e-mail deve ser prenchido corretamente')
 // .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
 // .should('be.visible')
 // .should('be.enabled')

 // assert com expect:
 // cy.get('.account_form > h3').then((texto) => {
 // console.log(texto.text()); // Mostra o texto do elemento no console
 // expect(texto.text()).to.equal('Login'); // Verifica se o texto é "Login"
//});

//alternativa simplificada: cy.get('.account_form > h3').should('have.text', 'Login');





// Em casos de uso do beforeEach, o certo é usar o before todo em minúsculo, para não confundir com o before de cypress

//tester utilizandos os dados de uma fixture
// describe('Testes na área de cadastro', ()=>{
//   beforeEach(() => {
//     cy.viewport('iphone-6'); 
//     cy.visit('/')
//   })
//  const user_data = require('../fixtures/user_create.json')
//   it(' Caso de teste 1 - Cadastro de Usuário com sucesso', ()=>{
//     cy.cadastro(user_datal.user_name, 'Bruno@gmail.com', user_data.password)
//     cy.get('.swal2-popup').should('be.visible')
//   })

//   it('Caso de teste 2 - Cadastro com email ja cadastrado', ()=>{
//     cy.cadastro(user_data.user_name, 'Bruno@gmail.com', user_data.password)
//     cy.get('.swal2-popup').should('be.visible')
//   })

//   it('Caso de teste 3 - Cadastro sem preencher o campo nome', ()=>{
//     cy.cadastro('', '9vH9o@example.com', user_data.password)
//     cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
//     // nesse caso em especifico, o cadastro não deve ser realizado e o teste validar isso, signifca que o cadastro nao foi realizado.
//   })

//   it('Caso de teste 4 - cadastro com email inválido', ()=>{
//     cy.cadastro(user_data.user_name, 'bruno@33332', user_data.password)
//     cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
//   })

//   it ('Caso de teste 5 - cadastro com senha vazia ou inválida',  () => {
//     cy.cadastro(user_data.user_name, '9vH9o@example.com', '')
//     cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
//   })
// })

