it("e2e on deployed site", function () {
  cy.visit("https://circlesapp.netlify.app/");
  cy.get(".lg\\:top-64 > .lg\\:text-lg > .font-bold").click();
  cy.get(".mt-12 > :nth-child(1) > .text-gray-900").clear("M");
  cy.get(".mt-12 > :nth-child(1) > .text-gray-900").type("Matt");
  cy.get(".mt-12 > .md\\:ml-6 > .text-gray-900").clear();
  cy.get(".mt-12 > .md\\:ml-6 > .text-gray-900").type("Dohe");
  cy.get(".md\\:flex.mt-8 > :nth-child(1) > .text-gray-900").clear();
  cy.get(".md\\:flex.mt-8 > :nth-child(1) > .text-gray-900").type("md@md.com");
  cy.get(".md\\:flex.mt-8 > .md\\:ml-6 > .text-gray-900").clear();
  cy.get(".md\\:flex.mt-8 > .md\\:ml-6 > .text-gray-900").type("12234");
  cy.get(".mt-9").click();
  cy.get(".mt-9").click();
  cy.get(".hidden > :nth-child(1) > a").click();
  cy.get(
    ":nth-child(2) > .md\\:text-sm > :nth-child(1) > .hover\\:dark\\:text-white"
  ).click();
  cy.get(".hidden > :nth-child(4) > button").click();
  cy.get("#input-username-for-credentials-provider").clear("johndoe@text.com");
  cy.get("#input-username-for-credentials-provider").type("johndoe@text.com");
  cy.get("#input-password-for-credentials-provider").clear("t");
  cy.get("#input-password-for-credentials-provider").type("test");
  cy.get("button").click();
  cy.get('[data-cy="groups"] > a').click();
  cy.get('[data-test="search-input"]').clear();
  cy.get('[data-test="search-input"]').type("swimming");
  cy.get("div:nth-child(2) > div > ul > li").contains("Swimming").click();
  cy.get(".fixed").click();
  cy.get(".pt-32 > div.justify-center").click();
  cy.get(":nth-child(2) > .px-3 > .mt-6").click();
  cy.get(".fixed").click();
  cy.get(".pt-32").click();
  cy.get(".hidden > :nth-child(2) > a").click();
  cy.get(".border-\\[rgba\\(186\\,229\\,243\\)\\]").click();
  cy.get(":nth-child(1) > .react-datepicker__day--001").click();
  cy.get(".justify-start > :nth-child(2)").click();
  cy.get(".justify-start > :nth-child(3)").click();
  cy.get(".lg\\:flex-row-reverse").click();
  cy.get('[data-cy="help"] > a').click();
  cy.get(":nth-child(2) > :nth-child(5) > button").click();
  cy.get(":nth-child(2) > :nth-child(5) > button").click();
});
