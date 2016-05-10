"use strict";

exports.command = function(element, value) {
    this.waitAndClick(element + " option[value='" + value + "']");

    return this;
};
