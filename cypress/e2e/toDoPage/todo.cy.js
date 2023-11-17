/// <reference types="cypress" />
import toDoPage from '../../support/pages/toDoPage';

describe('Realizar testes na pagina ToDos', () => {
    let toDoItems;

    before(() => {
        cy.fixture('toDoItemList.json').then(testData => {
            toDoItems = testData;
        });
    });

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    });

    it('Deve apresentar todos os campos', () => {
        cy.get(toDoPage.elements.headerCypress).should('be.visible');
        cy.get(toDoPage.elements.headerCommands).should('be.visible');
        cy.get(toDoPage.elements.headerUtilities).should('be.visible');
        cy.get(toDoPage.elements.headerCypressApi).should('be.visible');
        cy.get(toDoPage.elements.headerGitHub).should('be.visible');
        cy.get(toDoPage.elements.titleH1).should('have.text', 'todos');
        cy.get(toDoPage.elements.inputData).should('be.visible').and('be.empty').and('be.focused');
    });

    it('Deve conter tarefas na lista', () => {
        cy.get(toDoPage.elements.toDoList).should('have.length', 2);
    });

    it('Deve permitir inserir nova tarefa', () => {
        toDoPage.inputToDo(toDoItems.name);
        cy.get(toDoPage.elements.toDoList).should('have.length', 3);
    });
});
