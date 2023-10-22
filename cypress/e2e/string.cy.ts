import { defaultColor, changingColor, modifiedColor, classCircle, testidInput, testidResult } from '../../src/constants/constans';


describe('Recursion test', () => {
  
    beforeEach(function () {
      cy.visit('/recursion');
      cy.get(testidInput).as('input');
      cy.get('[data-testid="button"]').as('button');
      cy.get(testidResult).as('result');
    });
  
    it('Button should be disabled if input is empty', () => {
      cy.get('@input').should('have.value', '');
      cy.get('@button').should('be.disabled');
    });
  
    it('Recursion works', () => {
      cy.get('@input').type("abcd");
      cy.get('@button').should('be.enabled').click();
      cy.get('@input').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', 'b');
      cy.get('@result').get(classCircle).eq(2).should('have.css', 'border', defaultColor).should('contain', 'c');
      cy.get('@result').get(classCircle).eq(3).should('have.css', 'border', changingColor).should('contain', 'd');
  
      cy.wait(1000);
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', modifiedColor).should('contain', 'd');
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'b');
      cy.get('@result').get(classCircle).eq(2).should('have.css', 'border', changingColor).should('contain', 'c');
      cy.get('@result').get(classCircle).eq(3).should('have.css', 'border', modifiedColor).should('contain', 'a');
  
      cy.wait(1000);
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', modifiedColor).should('contain', 'd');
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', modifiedColor).should('contain', 'c');
      cy.get('@result').get(classCircle).eq(2).should('have.css', 'border', modifiedColor).should('contain', 'b');
      cy.get('@result').get(classCircle).eq(3).should('have.css', 'border', modifiedColor).should('contain', 'a');
    });
  });