import { SelectablePage } from "../pageObjects/selectablePage";

/*
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/selectable')
    cy.get('#demo-tab-grid').click();
    //click two four six eight, validate those are highlighted, rest isn't
    cy.get('#row1').contains("Two").click();
    cy.get('#row2').contains("Four").click();
    cy.get('#row2').contains("Six").click();
    cy.get('#row3').contains("Eight").click();

    cy.get('#row1').contains("Two").should("have.class", "active");
    cy.get('#row2').contains("Four").should("have.class", "active");
    cy.get('#row2').contains("Six").should("have.class", "active");
    cy.get('#row3').contains("Eight").should("have.class", "active");

    cy.get('#row1').contains("One").should("not.have.class", "active");
    cy.get('#row1').contains("Three").should("not.have.class", "active");
    cy.get('#row2').contains("Five").should("not.have.class", "active");
    cy.get('#row3').contains("Seven").should("not.have.class", "active");
    cy.get('#row3').contains("Nine").should("not.have.class", "active");
  })
})
*/
describe("DEMO QA", () => {
  context("grid test", () => {

      beforeEach(() => {
          SelectablePage.visit();
      });

      it('grid', () => {
        cy.get('#demo-tab-grid').click();
        //click two four six eight, validate those are highlighted, rest isn't
        SelectablePage.row1().contains("Two").click();
        SelectablePage.row2().contains("Four").click();
        SelectablePage.row2().contains("Six").click();
        SelectablePage.row3().contains("Eight").click();
    
        SelectablePage.row1().contains("Two").should("have.class", "active");
        SelectablePage.row2().contains("Four").should("have.class", "active");
        SelectablePage.row2().contains("Six").should("have.class", "active");
        SelectablePage.row3().contains("Eight").should("have.class", "active");
    
        SelectablePage.row1().contains("One").should("not.have.class", "active");
        SelectablePage.row1().contains("Three").should("not.have.class", "active");
        SelectablePage.row2().contains("Five").should("not.have.class", "active");
        SelectablePage.row3().contains("Seven").should("not.have.class", "active");
        SelectablePage.row3().contains("Nine").should("not.have.class", "active");
      })
      });
});