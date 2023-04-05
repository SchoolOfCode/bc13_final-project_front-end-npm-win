describe('logintest', () => {
  it('allows user to sign in and view groups', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="signin"]').click();
    cy.get('#input-username-for-credentials-provider').clear('npmwin@gmail.com');
    cy.get('#input-username-for-credentials-provider').type('npmwin@gmail.com');
    cy.get('#input-password-for-credentials-provider').clear('H');
    cy.get('#input-password-for-credentials-provider').type('Hackathon2');
    cy.get('button').click();
    cy.get('[data-cy="groups"]').click();
  })
})

