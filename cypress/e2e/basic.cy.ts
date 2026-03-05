describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the main heading', () => {
    cy.get('h1')
    .contains('J. Worden & Sons Paving LLC');
  })

  it('displays the services section', () => {
    cy.get('h2')
    .contains('Our Services');
  })
})
