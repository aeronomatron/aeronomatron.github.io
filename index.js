/*
 * by aeronomatron.
 *
 * Javascript file to provide some dynamic changes to index.html elements and UI.
 */

"use strict";
(function() {
  window.addEventListener("load", init);

  /** Initializing function on load */
  function init() {
    id("bundleclients").addEventListener("change", showBundle);
    id("badgebutton").addEventListener("click", spawnBadge);
    id("graphics").addEventListener("click", graphicView);
    id("painting").addEventListener("click", paintingView);
    id("charportraits").addEventListener("click", portraitView);
    id("creatures").addEventListener("click", creatureView);
    id("project").addEventListener("click", projectView);
    id("xerxicon").addEventListener("click", homeView);
  }

  /** Used to show the correct set of images when selected in the dropdown */
  function showBundle() {
    let choice = id("bundleclients").value;
    let qsaArray = qsa(".bundle");
    for (let i = 0; i < qsaArray.length; i++) {
      qsaArray[i].classList.add("hidden");
    }
    if (choice === "playdohbear") {
      id('playdohcomm').classList.remove('hidden');
    } else if (choice === "iamlegend") {
      id('legendcomm').classList.remove('hidden');
    } else if (choice === "scabbaz") {
      id('scabbazcomm').classList.remove('hidden');
    }
  }

  function graphicView() {
    id('welcome').classList.add('hidden');
    id('miscgraphics').classList.remove('hidden');
    id('envpainting').classList.add('hidden');
    id('charportrait').classList.add('hidden');
    id('charcreatures').classList.add('hidden');
    id('charprojects').classList.add('hidden');
    id('wips').classList.add('hidden');
  }

  function paintingView() {
    id('welcome').classList.add('hidden');
    id('miscgraphics').classList.add('hidden');
    id('envpainting').classList.remove('hidden');
    id('charportrait').classList.add('hidden');
    id('charcreatures').classList.add('hidden');
    id('charprojects').classList.add('hidden');
    id('wips').classList.add('hidden');
  }

  function portraitView() {
    id('welcome').classList.add('hidden');
    id('miscgraphics').classList.add('hidden');
    id('envpainting').classList.add('hidden');
    id('charportrait').classList.remove('hidden');
    id('charcreatures').classList.add('hidden');
    id('charprojects').classList.add('hidden');
    id('wips').classList.add('hidden');
  }

  function creatureView() {
    id('welcome').classList.add('hidden');
    id('miscgraphics').classList.add('hidden');
    id('envpainting').classList.add('hidden');
    id('charportrait').classList.add('hidden');
    id('charcreatures').classList.remove('hidden');
    id('charprojects').classList.add('hidden');
    id('wips').classList.add('hidden');
  }

  function projectView() {
    id('welcome').classList.add('hidden');
    id('miscgraphics').classList.add('hidden');
    id('envpainting').classList.add('hidden');
    id('charportrait').classList.add('hidden');
    id('charcreatures').classList.add('hidden');
    id('charprojects').classList.remove('hidden');
    id('wips').classList.add('hidden');
  }

  function homeView() {
    id('welcome').classList.remove('hidden');
    id('miscgraphics').classList.add('hidden');
    id('envpainting').classList.add('hidden');
    id('charportrait').classList.add('hidden');
    id('charcreatures').classList.add('hidden');
    id('charprojects').classList.add('hidden');
    id('wips').classList.add('hidden');
  }

  /** Spawns a random cat image out of 7 possible images */
  function spawnBadge() {
    let newCat = document.createElement('img');
    let catArray = [];
    catArray[0] = "img/playdohbear/badge1.png";
    catArray[1] = "img/playdohbear/badge2.png";
    catArray[2] = "img/playdohbear/badge3.png";
    catArray[3] = "img/playdohbear/badge4.png";
    catArray[4] = "img/playdohbear/badge5.png";
    catArray[5] = "img/playdohbear/badge6.png";
    catArray[6] = "img/playdohbear/badge7.png";
    newCat.src = catArray[Math.floor(Math.random() * catArray.length)];
    id("spawnedcats").appendChild(newCat);
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
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();