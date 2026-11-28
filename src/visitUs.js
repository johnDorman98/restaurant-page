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

  const locationCard = document.createElement("div");
  const locationCardHeader = document.createElement("h4");
  locationCardHeader.textContent = "LOCATION"
  const locationCardImage = document.createElement("img");
  locationCardImage.src = "";
  locationCardImage.alt = "Location Card Image";
  const locationCardAddress = document.createElement("p");
  locationCardAddress.textContent = "123 example road";
  const locationCardAddressLink = document.createElement("a");
  locationCardAddressLink.href = "";
  locationCardAddressLink.textContent = "Get Directions";
  locationCardAddressLink.target = "_blank";
  locationCardAddressLink.rel = 'noopener noreferrer';
  locationCard.append(locationCardHeader, locationCardImage, locationCardAddress, locationCardAddressLink);

  const hoursCard = document.createElement("div");
  const hoursCardHeader = document.createElement("h4");
  hoursCardHeader.textContent = "HOURS";
  const weekdayHours = createHoursRow({days: "Mon - Fri", hours: "7:00am - 6:00pm"});
  const saturdayHours = createHoursRow({days: "Sat", hours: "8:00am - 5:00pm"});
  const sundayHours = createHoursRow({days: "Sun", hours: "Closed"});
  hoursCard.append(hoursCardHeader, weekdayHours, saturdayHours, sundayHours);

  const contactCard = document.createElement("div");
  const contactCardHeader = document.createElement("h4");
  contactCardHeader.textContent = "GET IN TOUCH";
  const contactNumber = document.createElement("p");
  contactNumber.textContent = "(+00) 123 456 7890";
  const contactEmail = document.createElement("a");
  contactEmail.href = "mailto:hello@themillstone.com";
  contactEmail.textContent = "hello@themillstone.com";
  contactCard.append(contactCardHeader, contactNumber, contactEmail);

  visitUsSection.append(visitUsHeader, locationCard, hoursCard, contactCard);

  return visitUsSection;
};

const createHoursRow = ({days, hours}) => {
  const hoursRow = document.createElement("div");
  const dayElement = document.createElement("span");
  dayElement.textContent = `${days}:`;
  const hoursElement = document.createElement("span");
  hoursElement.textContent = hours
  hoursRow.append(dayElement, hoursElement);

  return hoursRow;
}

export default createVisitUsSection;
