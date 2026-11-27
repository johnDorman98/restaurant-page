/**
 * Creates the visit us section element with its child elements appended.
 * @returns {HTMLElement} The created visit us section element.
 */
const createVisitUsSection = () => {
  const visitUsSection = document.createElement("section");
  visitUsSection.id = "visit-us-section";

  const visitUsHeader = document.createElement("h3");
  visitUsHeader.id = "visit-us-header";
  visitUsHeader.textContent = "Visit Us!";

  const visitUsDetails = document.createElement("p");
  visitUsDetails.id = "visit-us-details";
  visitUsDetails.textContent = "Details to be added";

  visitUsSection.append(visitUsHeader, visitUsDetails);

  return visitUsSection;
};

export default createVisitUsSection;