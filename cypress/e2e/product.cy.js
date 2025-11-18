/// <reference types="cypress" />
describe("fonctionnalité d'authentification",()=>{
    
    before("visiter le lien",()=>{
       cy.visit("https://www.saucedemo.com/")
    
         cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
 })
 it("Verification de l'ajout d'un produit dans le panier ",()=>{
 
        cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click()
        cy.get("#remove-sauce-labs-backpack").should("be.visible")
        cy.get(".shopping_cart_badge").should("be.visible").and("have.text","1")
        
   // it("Verification de l'ajout d'un  deuxieme produit dans le panier ",()=>{
        cy.get("#add-to-cart-sauce-labs-bike-light").click()
        cy.get("#remove-sauce-labs-bike-light").should("be.visible")
        cy.get(".shopping_cart_badge").should("be.visible").and("have.text","2") 
    
        //it("Verification de la supression d'un  produit dans le panier ",()=>{        
            

        cy.get("#remove-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible")
       cy.get(".shopping_cart_badge").should("be.visible").and("have.text","1") 
    
        //it("Verification de la supression du deuxieme  produit dans le panier ",()=>{
        cy.get("#remove-sauce-labs-bike-light").click()
        cy.get("#add-to-cart-sauce-labs-bike-light").should("be.visible")
        cy.get(".shopping_cart_badge").should("not.exist")

        //
         
        

})
})