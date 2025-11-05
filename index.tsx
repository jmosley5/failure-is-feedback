import React from "react"; // This repository does not include react. This is only an example.

/**
 * The following are a set of Cypress tests that rely on the elements in this file. Please check these tests when making changes.
 * (NOTE: Use CMD + Click instead of clicking the "follow link" option.)
 * {@link file://./cypress/e2e/quick-tip/link-it.cy.ts}
 */

const ExampleButton: React.FC = () => (
  <button data-testid="button-example">Click Here</button>
);

export default ExampleButton;
