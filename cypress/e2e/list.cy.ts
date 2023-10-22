import { defaultColor, changingColor, classCircle, testidResult } from '../../src/constants/constans';

describe('List test', () => {
  
    beforeEach(function () {
      cy.visit('http://localhost:3000/list');
      cy.get('[data-testid="valueInput"]').as('valueInput');
      cy.get('[data-testid="indexInput"]').as('indexInput');
      cy.get('[data-testid="addToHead"]').as('addToHead');
      cy.get('[data-testid="addToTail"]').as('addToTail');
      cy.get('[data-testid="deleteFromHead"]').as('deleteFromHead');
      cy.get('[data-testid="deleteFromTail"]').as('deleteFromTail');
      cy.get('[data-testid="addByIndex"]').as('addByIndex');
      cy.get('[data-testid="deleteByIndex"]').as('deleteByIndex');
      cy.get(testidResult).as('result');
    });
  
    it('Buttons should be disabled if input is empty', () => {
      cy.get('input').should('have.value', '');
      cy.get('button').should('be.disabled');
    });
  
    it('Initial list should be visible', () => {
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', '0');
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', '34');
      cy.get('@result').get(classCircle).eq(2).should('have.css', 'border', defaultColor).should('contain', '8');
      cy.get('@result').get(classCircle).eq(3).should('have.css', 'border', defaultColor).should('contain', '1');
    });
  
    it('Adding to head works', () => {
      cy.get('@valueInput').type("a");
      cy.get('@addToHead').should('be.enabled').click();
      cy.get('@valueInput').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', 'a');
    });
  
    it('Adding to tail works', () => {
      cy.get('@valueInput').type("a");
      cy.get('@addToTail').should('be.enabled').click();
      cy.get('@valueInput').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(3).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).last().should('have.css', 'border', defaultColor).should('contain', 'a');
    });
  
    it('Adding by index works', () => {
      cy.get('@valueInput').type("a");
      cy.get('@indexInput').type("1");
      cy.get('@addByIndex').should('be.enabled').click();
      cy.get('@valueInput').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', 'a');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', 'a');
    });
  
    it('Deleting from head works', () => {
      cy.get('@deleteFromHead').should('be.enabled').click();
  
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', '0');
      cy.wait(500);
      cy.get('@result').get(classCircle).first().should('have.css', 'border', defaultColor).should('contain', '34');
    });
  
    it('Deleting from tail works', () => {
      cy.get('@deleteFromTail').should('be.enabled').click();
  
      cy.get('@result').get(classCircle).last().should('have.css', 'border', changingColor).should('contain', '1');
      cy.wait(500);
      cy.get('@result').get(classCircle).last().should('have.css', 'border', defaultColor).should('contain', '8');
    });
  
    it('Deleting by index works', () => {
      cy.get('@indexInput').type("1");
      cy.get('@deleteByIndex').should('be.enabled').click();
      cy.get('@indexInput').should('have.value', '');
  
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', changingColor).should('contain', '34');
      cy.wait(500);
      cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', '8');
    });
  });