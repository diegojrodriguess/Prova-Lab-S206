Cypress.Commands.add('login', (username,password) =>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.btn-primary').click()
})