// Wait for the page to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to remove the ytd-popup-container element
  function removeYtdPopupContainer() {
    const ytdPopupContainer = document.querySelector("ytd-popup-container");
    if (ytdPopupContainer) {
      ytdPopupContainer.remove();
    }
  }

  // Call the function initially
  removeYtdPopupContainer();

  // Observe changes to the DOM and remove ytd-popup-container if added later
  const observer = new MutationObserver(removeYtdPopupContainer);
  observer.observe(document.body, { childList: true, subtree: true });
});
