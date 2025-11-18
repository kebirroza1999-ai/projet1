/// <reference types="cypress" />

describe("fonctionnalité d'authentification",()=>{
    
    beforeEach ("visiter le lien",()=>{
        //let environnement = Cypress.env("var")
        //let url
       // switch(environnement){
           // case "recette":
            //url = "https://www.saucedemo.com/"
           // break;
            //case"integration":
            //url = "https://www.saucedemo1.com/"
            //break;
            //case"pprod":
            //url = "https://www.saucedemo2.com/"
            //break;
            //case"prod":
            //url = "http://ww.saucedemo3.com/"
            //break;
            


        
        //cy.visit(url)
        cy.visit("https://www.saucedemo.com/")
    
    })

    it("login with valid credentials",{tags: ['@regression']}, ()=>{
        //cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
       
        cy.get("#password").type("secret_sauce")
        
        cy.get("#login-button").click()
        
    //cy.get("span.title").should("be visible")
    cy.url().should('include', '/inventory.html')
    

    })

     it("login with invalid credentials",{tags: ['@regression','@smoke']},()=>{
        //cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("falseuser_name") 
       
        cy.get("#password").type("false_password")
        
        cy.get("#login-button").click()
       // cy.get("h3[data-test=error-button]").should("be.visible")
       
       cy.get("[data-test=error-button]").should("be.visible")

    

    })
     
    it("login with simpl fixture credentials",{tags: ['@regression']}, ()=>{
        //cy.visit("https://www.saucedemo.com/")
        cy.fixture("jdd_json").then((compte)=>{
        
        cy.get("#user-name").type(compte.name)
       
        cy.get("#password").type(compte.pass)
        
        cy.get("#login-button").click()
        compte.result=="ok"?cy.url().should('include', '/inventory.html'):cy.get("[data-test=error-button]").should("be.visible")
        

        //if(compte.result=="ok")
            //cy.url().should('include', '/inventory.html')
       // else 
            //cy.get("[data-test=error-button]").should("be.visible")
        

    })
 })
})
