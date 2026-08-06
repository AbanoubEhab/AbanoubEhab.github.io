document.addEventListener("DOMContentLoaded", function () {
  // Fix: search dialog needs an accessible name
  var searchDialog = document.querySelector('[data-md-component="search"][role="dialog"]');
  if (searchDialog && !searchDialog.hasAttribute("aria-label")) {
    searchDialog.setAttribute("aria-label", "Search");
  }

  // Fix: aria-hidden palette toggle inputs shouldn't be focusable
  document.querySelectorAll('input[aria-hidden="true"]').forEach(function (el) {
    el.setAttribute("tabindex", "-1");
  });
});