"use strict";

exports.command = function(element) {
    this
        .waitForElementVisible(element)
        .moveToElement(element, 5, 5);

    return this;
};
