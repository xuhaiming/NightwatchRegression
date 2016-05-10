"use strict";

var elements = require("../../elements/homePageElements"),
    config = require("../../config");

module.exports = {
    navigateToHomePage: function(browser) {
        browser.url(config.baseUrl)
               .waitForElementVisible("body");
    },

    navigateToSignIn: function(browser) {
        browser.waitAndClick(elements.signIn);
    },

    navigateToRegister: function(browser) {
        browser.waitAndClick(elements.register);
    },

    navigateToWomenTrenchCoats: function(browser) {
        browser
            .waitAndMoveTo(elements.menuWomen)
            .waitAndClick(elements.womenTrenchCoatsExpand)
            .waitAndClick(elements.womenTrenchCoatsLink);
    }
};
