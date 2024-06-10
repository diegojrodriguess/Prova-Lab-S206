/// <reference = cypress>

describe("Testes de UI no site saucedemo.com",()=>{
  it("Teste de login com falha pelo user errado",()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("Diego")
    cy.get('[data-test="password"]').type("senha123")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should("contain.text","Epic sadface: Username and password do not match any user in this service")
  })

  it("Teste de login com falha ao tentar usar user proibido",()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should("contain.text","Epic sadface: Sorry, this user has been locked out.")
  })

  it("Teste de login com sucesso",()=>{
    login()
    cy.get('.app_logo').should("contain.text","Swag Labs")
  })


  it("Teste de compra de mochila no carrinho com sucesso",()=>{
    login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item-name"]').should("contain.text","Sauce Labs Backpack")
  })




})

function login(){

  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
}


