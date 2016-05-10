"use strict";

var elements = require("../../elements/productDetailPageElements");

module.exports = {
    changeSize: function (browser) {
        browser.selectValue(elements.productSizeSelect, "39004521008");
    },

    checkout: function (browser) {
        browser.waitAndClick(elements.checkoutLink);
    }
};

