import { defaultColor, changingColor, classCircle, testidInput, testidResult } from '../../src/constants/constans';

describe('Stack test',() => {

    beforeEach(function(){
        cy.visit('/stack');
        cy.get(testidInput).as('input');
        cy.get('[data-testid="push"]').as('push');
        cy.get('[data-testid="pop"]').as('pop')
        cy.get('[data-testid="clear"]').as('clear');
        cy.get(testidResult).as('result');
    })
    it('Button should be disabled if input is empty', ()=>{
        cy.get('@input').should('have.value', '');
        cy.get('@push').should('be.disabled');
        cy.get('@pop').should('be.disabled');
        cy.get('@clear').should('be.disabled');
    })
    it('Adding to the stack works', () => {
        cy.get('@input').type("a");
        cy.get('@push').should('be.enabled').click();
        cy.get('@input').should('have.value', '');
    
        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
    });
    it('Deleting from the stack works', () => {
        cy.get('@input').type("a");
        cy.get('@push').should('be.enabled').click();
        cy.get('@input').should('have.value', '');
    
        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
    
        cy.get('@input').type("b");
        cy.get('@push').should('be.enabled').click();
    
        cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'b');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', 'b');
    
        cy.get('@pop').should('be.enabled').click();
    
        cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'b');
        cy.wait(500);
        cy.get('@result').get(classCircle).last().should('have.css', 'border', defaultColor).should('contain', 'a');
    });
    it('Clearing the stack works', () => {
        cy.get('@input').type("a");
        cy.get('@push').should('be.enabled').click();
        cy.get('@input').should('have.value', '');
    
        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
    
        cy.get('@input').type("b");
        cy.get('@push').should('be.enabled').click();
    
        cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'b');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', 'b');
    
        cy.get('@clear').should('be.enabled').click();
        cy.wait(500);
        cy.get('@result').should('be.empty');
    });

})