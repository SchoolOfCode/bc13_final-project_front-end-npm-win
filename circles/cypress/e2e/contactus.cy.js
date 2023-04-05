describe("testing actions for contact us form ", () => {
  before(() => {
    cy.visit("https://circlesapp.netlify.app/contactus");
  });
  it("test for typing into all fields on the form", () => {
    const SAMPLE_DETAILS = {
      firstName: "Matt",
      surname: "Matt",
      email_address: "matt@circles.com",
      contact_number: 1234556678,
      message: "Can I join the Chess Club?",
    };
    // enters text in first name input box
    cy.get("input[name=from_name]")
      .focus()
      .clear()
      .type(SAMPLE_DETAILS.firstName)
      .blur();
    cy.get("input[name=from_sec_name")
      .focus()
      .clear()
      .type(SAMPLE_DETAILS.surname)
      .blur();
    cy.get("input[name=user_email]")
      .focus()
      .clear()
      .type(SAMPLE_DETAILS.email_address)
      .blur();
    cy.get("input[name=tel]")
      .focus()
      .clear()
      .type(SAMPLE_DETAILS.contact_number)
      .blur();
    cy.get("textarea[name=message]")
      .focus()
      .clear()
      .type(SAMPLE_DETAILS.message)
      .blur();
    // click on send button on the form
    cy.get("input[type=submit]").click();
  });
});
