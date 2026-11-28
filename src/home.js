import createVisitUsSection from "./visitUs.js";

/**
 * Clears `#content` and populates it with the homepage sections.
 */
const createHomePage = () => {
  // Select and clear the content div
  const contentContainer = document.querySelector("#content");
  contentContainer.replaceChildren();

  const heroSection = createHeroSection();
  const featuredSection = createFeaturedSection();
  const visitUsSection = createVisitUsSection();

  // Append each of the elements created by the helper functions to the content div (contentContainer)
  contentContainer.append(heroSection, featuredSection, visitUsSection);
};

/**
 * Creates the hero section element with its child elements appended.
 * @returns {HTMLElement} The created hero section element.
 */
const createHeroSection = () => {
  const heroSection = document.createElement("section");
  heroSection.id = "hero-section";

  const heroImage = document.createElement("img");
  heroImage.id = "hero-image";
  heroImage.src = "";
  heroImage.alt = "hero image";

  const heroHeader = document.createElement("h2");
  heroHeader.id = "hero-header";
  heroHeader.textContent = "Hero Header";

  const heroButton = document.createElement("button");
  heroButton.id = "hero-button";
  heroButton.textContent = "Discover Our Menu";

  heroSection.append(heroImage, heroHeader, heroButton);

  return heroSection;
};

/**
 * Creates the featured section element with its child elements appended.
 * @returns {HTMLElement} The created featured section element.
 */
const createFeaturedSection = () => {
  const featuredSection = document.createElement("figure");
  featuredSection.id = "featured-section";

  const featuredImage = document.createElement("img");
  featuredImage.id = "featured-section-image";
  featuredImage.src = "";
  featuredImage.alt = "featured image";

  const featuredHeader = document.createElement("h3");
  featuredHeader.id = "featured-header";
  featuredHeader.textContent = "Featured Header";

  const featuredCaption = document.createElement("figcaption");
  featuredCaption.id = "featured-caption";
  featuredCaption.textContent = "featured dish description";

  featuredSection.append(featuredImage, featuredHeader, featuredCaption);

  return featuredSection;
};



export { createHomePage };

// Visit us section to be expanded with hours, and contact details possibly.