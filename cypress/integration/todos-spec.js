describe('The todo app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:8080');
  });

  it('displays the right heading', function() {
    cy.get('h1').contains('Todos');
  });

  it('lets you add a todo', function() {
    cy.get('#new-todo').type('Write end to end tests with cypress!{enter}');

    cy.get('.todo').last().contains('Write end to end tests with cypress!');
  });

  it('lets you toggle a todo', function() {
    cy.get('#new-todo').type('Write end to end tests with cypress!{enter}');

    cy.get('.todo > .todo-toggle').last().as('lastTodoToggle').click();
    cy.get('.todo').last().as('lastTodo').should('have.class', 'todo-completed');

    cy.get('@lastTodoToggle').click();
    cy.get('@lastTodo').should('not.have.class', 'todo-completed');
  });
});
