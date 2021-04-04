// ==UserScript==
// @name         Station Command Center Reload
// @namespace    https://phonetool.amazon.com/users/pozzor
// @version      0.1
// @description  20 second reload on Station Command Route Stager.
// @author       Roman Pozzo
// @match        https://logistics.amazon.com/station/dashboard/outboundAMZL
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   const reload = setInterval(function(){ location.reload() }, 20000);
    console.log('Reloaded');

})();
