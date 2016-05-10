"use strict";

var elements = require("../../elements/orderPageElements"),
    customer = require("../../config").customer;

module.exports = {
    fillInformation: function (browser) {
        browser
            .selectValue(elements.titleSelect, customer.title)
            .setValue(elements.lastNameInput, customer.lastName)
            .setValue(elements.firstNameInput, customer.firstName)
            .setValue(elements.phoneInput, customer.phone)
            .selectValue(elements.stateSelect, customer.state)
            .selectValue(elements.citySelect, customer.city)
            .selectValue(elements.districtSelect, customer.district)
            .setValue(elements.addressInput, customer.address)
            .setValue(elements.emailInput, customer.email)
            .waitAndClick(elements.addressConfirmation)
            .waitAndClick(elements.agreementCheckbox);
    },

    goToNextStep: function (browser) {
        browser.waitAndClick(elements.submitButton);
    }
};

