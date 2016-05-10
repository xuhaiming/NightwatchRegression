"use strict";

var elements = require("../../elements/registerPageElements"),
    myaccount = require("../../elements/myaccountPageElements"),
    customer = require("../../config").customer,
    moment = require('moment');

module.exports = {
    registerNewUser: function(browser) {
        browser
            .waitAndClick(elements.titleRadio)
            .setValue(elements.lastNameInput, customer.lastName)
            .setValue(elements.firstNameInput, customer.firstName)
            .setValue(elements.emailInput, moment() + "@test.com")
            .setValue(elements.phoneInput, customer.phone)
            .setValue(elements.passwordInput, "Test2016!")
            .waitAndClick(elements.registerButton)
            .waitForElementNotPresent(elements.loadingPanel)
            .waitForElementVisible(myaccount.title);
    }
};
