// Select the div#content
// Clear clear div#content
const createHomePage = () => {
  // Select and clear the content div
  const contentContainer = document.querySelector("#content");
  contentContainer.replaceChildren()
  
  // Call the hero section helper function
  // Call the featured dish section helper function
  // Call the visit us section helper function

  // Append each of the elements created by the helper functions to the content div (contentContainer)
};

// Planning and notes
// Create a function to populate the div#content replacing the current skeleton HTML, rebuilding it using DOM manipulation.
// Create function
// Select the div#content

// Look into how helper functions can be used here
// the helper function would create the elements for the sections, they can be called within the createHomePage function and appended to the DOM in order.

// Create helper function here for hero section
// Create the hero section element
// Look into generating a hero image
// To the section create and append a image element, header (h2), cta button element

// Create helper function for featured dish section
// Create the featured dish section element
// Generate a image
// To the featured dish section, create and append a header (h3) and paragraph element
// Consider looking into other semantic elements that may better suit this
// The figure and figcaption elements make most sense as the featured dish represents self-contained content with a caption

// Create helper function for visit us section (section to be possibly reworked later on)
// Create visit us section element
// Create and append paragraph details for location, and possibly contact number.

// Consider if the helper functions should append directly to a element passed into them if possibly or if they should return the element to be appended.
// The helper functions will return the created elements, the home function will then call them and append the created element to the div#content

export { createHomePage };
