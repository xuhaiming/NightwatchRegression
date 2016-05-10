"use strict";

var elements = require("../../elements/bagElements");

module.exports = {
    checkout: function(browser) {
        browser.waitAndClick(elements.checkoutButton);
    },

    guestCheckout: function(browser) {
        browser.waitAndClick(elements.guestCheckoutButton);
    }
};

