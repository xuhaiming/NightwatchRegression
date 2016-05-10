"use strict";

var WaitForAttribute, events,
    extend,
    hasProp = {}.hasOwnProperty;

events = require("events");

extend = function (child, parent) {
    for (var key in parent) {
        if (hasProp.call(parent, key)) {
            child[key] = parent[key];
        }
    }

    function ctor() {
        this.constructor = child; //jshint ignore:line
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;

    return child;
};

WaitForAttribute = (function (superClass) {
    extend(WaitForAttribute, superClass);

    WaitForAttribute.prototype.timeoutRetryInMilliseconds = 100;

    WaitForAttribute.prototype.defaultTimeoutInMilliseconds = 5000;

    WaitForAttribute.prototype.locateStrategy = "css";

    function WaitForAttribute() { //jshint ignore:line
        WaitForAttribute.__super__.constructor.apply(this, arguments);
        this.startTimeInMilliseconds = null;
    }

    WaitForAttribute.prototype.restoreLocateStrategy = function () {
        if (this.locateStrategy === "xpath") {
            this.api.useXpath();
        }
        if (this.locateStrategy === "css") {
            return this.api.useCss();
        }
    };

    WaitForAttribute.prototype.command = function (elementSelector, attribute, checker, timeoutInMilliseconds) {
        this.locateStrategy = this.client.locateStrategy;
        this.startTimeInMilliseconds = new Date().getTime();

        if (typeof timeoutInMilliseconds !== "number") {
            timeoutInMilliseconds = this.api.globals.waitForConditionTimeout;
        }

        if (typeof timeoutInMilliseconds !== "number") {
            timeoutInMilliseconds = this.defaultTimeoutInMilliseconds;
        }

        this.check(elementSelector, attribute, checker, (function (_this) {
            return function (result, loadedTimeInMilliseconds) {
                var message;

                if (result) {
                    message = "waitForAttribute: " +
                        elementSelector + "@" + attribute +
                        ". Expression was true after " +
                        (loadedTimeInMilliseconds - _this.startTimeInMilliseconds) + ".";
                } else {
                    message = "waitForAttribute: " +
                        elementSelector + "@" + attribute +
                        ". Expression wasn't true in " +
                        timeoutInMilliseconds + " ms.";
                }

                _this.client.assertion(result, "expression false", "expression true", message, true);

                return _this.emit("complete");
            };
        })(this), timeoutInMilliseconds);

        return this;
    };

    WaitForAttribute.prototype.check = function (elementSelector, attribute, checker, callback, maxTimeInMilliseconds) { //jshint ignore:line
        this.restoreLocateStrategy();

        return this.api.getAttribute(elementSelector, attribute, (function (_this) {
            return function (result) {
                var now;
                now = new Date().getTime();

                if (result.status === 0 && checker(result.value)) {
                    return callback(true, now);
                } else if (now - _this.startTimeInMilliseconds < maxTimeInMilliseconds) {
                    return setTimeout(function () {
                        return _this.check(elementSelector, attribute, checker, callback, maxTimeInMilliseconds);
                    }, _this.timeoutRetryInMilliseconds);
                } else {
                    return callback(false);
                }
            };
        })(this));
    };

    return WaitForAttribute;

})(events.EventEmitter);

module.exports = WaitForAttribute;
