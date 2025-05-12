import { BasePage } from "./basePage";

export class SelectablePage extends BasePage{
    static get url() {
        return "selectable";
    }

    static row1() {
        return cy.get("#row1");
    }

    static row2() {
        return cy.get("#row2");
    }

    static row3() {
        return cy.get("#row3");
    }
}
