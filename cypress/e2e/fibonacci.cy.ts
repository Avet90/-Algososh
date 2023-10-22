import { defaultColor,classCircle,testidInput, testidResult } from '../../src/constants/constans';

describe('Fibonacci test',() => {

    beforeEach( function () {
        cy.visit('/fibonacci');
        cy.get(testidInput).as('input');
        cy.get('[data-testid="button"]').as('button');
        cy.get(testidResult).as('result');
    });

    it('Button should be disabled if input is empty', () => {
        cy.get('@input').should('have.value', '');
        cy.get('@button').should('be.disabled');
    })

    it('Fibonacci work', () => {
        cy.get('@input').type('3');
        cy.get('@button').should('be.enabled').click();
        cy.get('@input').should('have.value', '');

        cy.get('@result').get(classCircle).eq(0).should('have.css', 'border', defaultColor).should('contain', '1');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(1).should('have.css', 'border', defaultColor).should('contain', '1');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(2).should('have.css', 'border', defaultColor).should('contain', '2');
        cy.wait(500);
        cy.get('@result').get(classCircle).eq(3).should('have.css', 'border', defaultColor).should('contain', '3');
    })
})