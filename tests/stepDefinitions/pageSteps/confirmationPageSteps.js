"use strict";

var elements = require("../../elements/confirmationPageElements");

module.exports = {
    verifyOrderSummary: function (browser) {
        browser.waitAndVerifyVisible(elements.confirmationContainer);
    }
};

