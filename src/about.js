import createVisitUsSection from "./visitUs.js";
// About us page planning
// "OUR STORY" header (h2)
// About section element
// Image such a flour mill or spelt flour field
// Subheader for section "Our story & approach"
// p element for details
// Content breaker with a image of a kitchen or dough prep
// Possible subheader such as "OUR CRAFT & KITCHEN"
// Possible details under the section
// Visit Us section created using helper function imported from visitUs module
// More details or subsections may need to be added such as a hours, and contact details

const createAboutPage = () => {
  const contentContainer = document.querySelector("#content");
  contentContainer.replaceChildren();

  const aboutPageHeader = document.createElement("h2");
  aboutPageHeader.id = "about-page-header";
  aboutPageHeader.textContent = "OUR STORY & APPROACH";

  const aboutSection = createAboutSection();
  const visualBreakSection = createVisualBreakSection();
  const visitUsSection = createVisitUsSection();
  // Each of the function calls will return the created section and stored in a variable
  contentContainer.append(
    aboutPageHeader,
    aboutSection,
    visualBreakSection,
    visitUsSection,
  );
};

const createAboutSection = () => {
  const aboutSection = document.createElement("section");
  aboutSection.id = "about-section";

  const aboutSectionHeader = document.createElement("h3");
  aboutSectionHeader.id = "about-section-header";
  aboutSectionHeader.textContent = "OUR HERITAGE & PHILOSOPHY";

  const aboutSectionImage = document.createElement("img");
  aboutSectionImage.id = "about-section-image";
  aboutSectionImage.src = "";
  aboutSectionImage.alt = "About section image";

  const aboutSectionDetails = document.createElement("p");
  aboutSectionDetails.id = "about-section-details";
  aboutSectionDetails.textContent = "About section details to be added.";

  aboutSection.append(
    aboutSectionHeader,
    aboutSectionImage,
    aboutSectionDetails,
  );

  return aboutSection;
};

const createVisualBreakSection = () => {
  const visualBreak = document.createElement("section");
  visualBreak.id = "visual-break";

  const visualBreakHeader = document.createElement("h3");
  visualBreakHeader.id = "visual-break-header";
  visualBreakHeader.textContent = "OUR CRAFT & KITCHEN";

  const visualBreakImage = document.createElement("img");
  visualBreakImage.id = "visual-break-image";
  visualBreakImage.src = "";
  visualBreakImage.alt = "Visual break image";

  visualBreak.append(visualBreakHeader, visualBreakImage);

  return visualBreak;
};

export { createAboutPage };
