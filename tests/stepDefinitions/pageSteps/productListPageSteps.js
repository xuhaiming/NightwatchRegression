"use strict";

var elements = require("../../elements/productListPageElements");

module.exports = {
    clickFirstProduct: function(browser) {
        browser
            .waitAndClick(elements.firstProductLink)
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            });
    }
};

