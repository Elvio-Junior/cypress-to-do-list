/// <reference types="cypress" />

class ToDoPage {
    elements = {
        headerCypress: '.navbar-brand',
        headerCommands: '.dropdown-toggle',
        headerUtilities: ':nth-child(1) > :nth-child(2) > a',
        headerCypressApi: ':nth-child(1) > :nth-child(3) > a',
        headerGitHub: '.pull-right > li > a',
        titleH1: 'h1',
        inputData: '[data-test="new-todo"]',
        toDoList: '.todo-list li',
    };

    inputToDo(toDoItem) {
        cy.get(this.elements.inputData)
            .clear()
            .type(toDoItem)
            .type('{enter}');
        return this;
    }
}

module.exports = new ToDoPage();
