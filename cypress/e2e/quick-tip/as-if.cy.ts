const userName = "cher";
const email = "cher@bronson-alcott.com";

beforeEach(() => {
  cy.createUser(userName, email);
  cy.get("@id").as("contactId");
});

afterEach(() => {
  cy.get("@contactId").then(function () {
    cy.deleteContact(this.contactId);
  });
});

describe("Experimenting with aliases", () => {
  it("A User is created", () => {
    cy.get("@contactId").then(function () {
      cy.api({
        method: "GET",
        url: "/url/used/to/test/for/an/existing/user",
      }).then((response) => {
        // Expecting the response status code to be 200
        expect(response.status).to.eq(200);
        expect(response.body).contain("users", `${this.contactId}`);
      });
    });
  });
});

// use .as() in combination with .then(function () {})
// access the this.alias in the .it() block (even with multiple tests) and in the afterEach()
