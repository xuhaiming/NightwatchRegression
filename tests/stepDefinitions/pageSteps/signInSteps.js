"use strict";

var elements = require("../../elements/signinPageElements"),
    customer = require("../../config").customer;

module.exports = {
    failedSignIn: function(browser) {
        browser
            .waitForElementVisible(elements.emailInput)
            .setValue(elements.emailInput, customer.email)
            .setValue(elements.passwordInput, "wrong password")
            .waitAndClick(elements.signInButton);
    }
};
