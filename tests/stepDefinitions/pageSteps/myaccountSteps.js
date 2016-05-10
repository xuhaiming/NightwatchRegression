"use strict";

var elements = require("../../elements/myaccountPageElements"),
    customer = require("../../config").customer;

module.exports = {
    addNewAddress: function(browser) {
        browser
            .waitAndClick(elements.addAddressButton)
            .selectValue(elements.titleSelect, customer.title)
            .setValue(elements.lastNameInput, customer.lastName)
            .setValue(elements.firstNameInput, customer.firstName)
            .setValue(elements.phoneInput, customer.phone)
            .selectValue(elements.stateSelect, customer.state)
            .selectValue(elements.citySelect, customer.city)
            .selectValue(elements.districtSelect, customer.district)
            .setValue(elements.addressInput, customer.address)
            .waitAndClick(elements.confirmButton)
            .waitForElementNotPresent(elements.loadingPanel);
    },

    checkNewAddress: function (browser) {
        var space = " ",
            name = customer.lastName + customer.firstName + space + customer.title,
            line = customer.state + space + customer.city + space + customer.district + space + customer.address;

        browser.assert.containsText(elements.addressName, name)
               .assert.containsText(elements.addressLine, line);
    }
};
