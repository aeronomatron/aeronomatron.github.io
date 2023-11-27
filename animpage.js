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
    id("2dbutton").addEventListener("click", show2dAnims);
    id("3dbutton").addEventListener("click", show3dAnims);
  }

  /** Used to toggle the 2d set of images when selected */
  function show2dAnims() {
    qs(".anim2d").classList.toggle("hidden");
  }

  /** Used to toggle the 3d set of images when selected */
  function show3dAnims() {
    qs(".anim3d").classList.toggle("hidden");
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