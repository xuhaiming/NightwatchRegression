"use strict";

exports.command = function(element) {
    this
        .waitForElementVisible(element)
        .verify.visible(element);

    return this;
};
