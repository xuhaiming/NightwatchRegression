"use strict";

exports.command = function(element) {
    this
        .waitForElementVisible(element)
        .waitForAttribute(element, "disabled", function(disabled) {
            return disabled === null;
        })
        .click(element);

    return this;
};
