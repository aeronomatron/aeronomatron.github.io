/*
 * by aeronomatron.
 *
 * Javascript file to provide a dynamic change for the animation page specifically.
 */

"use strict";
(function() {
  window.addEventListener("load", init);

  /** Initializing function on load */
  function init() {
    id("paragonsicon").addEventListener("click", showParagons);
    id("stormicon").addEventListener("click", showStorm);
  }

  /** Used to toggle the 2d set of images when selected */
  function showParagons() {
    qs(".paragonsproj").classList.toggle("hidden");
  }

  /** Used to toggle the 3d set of images when selected */
  function showStorm() {
    qs(".stormproj").classList.toggle("hidden");
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
    function qs(query) {
      return document.querySelector(query);
    }
})();