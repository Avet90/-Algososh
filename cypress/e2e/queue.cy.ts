import { defaultColor, changingColor, classCircle, testidInput, testidResult } from '../../src/constants/constans';

describe('Queue test', () => {
  
    beforeEach(function () {
      cy.visit('/queue');
      cy.get(testidInput).as('input');
      cy.get('[data-testid="enqueue"]').as('enqueue');
      cy.get('[data-testid="dequeue"]').as('dequeue');
      cy.get('[data-testid="clear"]').as('clear');
      cy.get(testidResult).as('result');
    });
  
    it('Buttons should be disabled if input is empty', () => {
      cy.get('@input').should('have.value', '');
      cy.get('@enqueue').should('be.disabled');
      cy.get('@dequeue').should('be.disabled');
      cy.get('@clear').should('be.disabled');
    });
  
    it('Adding to the queue works', () => {
      cy.get('@input').type("a");
      cy.get('@enqueue').should('be.enabled').click();
      cy.get('@input').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
    });
  
    it('Deleting from the queue works', () => {
      cy.get('@input').type("a");
      cy.get('@enqueue').should('be.enabled').click();
      cy.get('@input').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
  
      cy.get('@input').type("b");
      cy.get('@enqueue').should('be.enabled').click();
  
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'b');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', 'b');
  
      cy.get('@dequeue').should('be.enabled').click();
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', '');
    });
  
    it('Clearing the queue works', () => {
      cy.get('@input').type("a");
      cy.get('@enqueue').should('be.enabled').click();
      cy.get('@input').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
  
      cy.get('@input').type("b");
      cy.get('@enqueue').should('be.enabled').click();
  
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'b');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', 'b');
  
      cy.get('@clear').should('be.enabled').click();
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(0).should('contain', '');
      cy.get('@result').get(classCircle).eq(1).should('contain', '');
    });
  });