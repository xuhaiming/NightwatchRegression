"use strict";

var elements = require("../../elements/paymentPageElements");

module.exports = {
    cupPay: function (browser) {
        browser
            .waitAndClick(elements.CUPButton)
            .waitAndClick(elements.payButton);
    },

    settlePayment: function (browser) {
        browser
            .waitAndClick(elements.paymentSettled)
            .click(elements.submitAccountButton);
    }
};

