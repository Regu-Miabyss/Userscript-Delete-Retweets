// ==UserScript==
// @name         Delete Retweet 1
// @namespace    github.com/regu-miabyss
// @version      1
// @description  Delete All of Your Retweets 
// @author       Regu_Miabyss
// @run-at       document-end
// @match        https://twitter.com/*
// @match        https://X.com/*
// @grant        none
// ==/UserScript==

setInterval(
    function() {
        document.querySelector('[data-testid="unretweet"]').click()
        document.querySelector('[data-testid="unretweetConfirm"]').click()
    },
    15
)