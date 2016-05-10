"use strict";

module.exports = {

    initialize: function(browser) {
        browser
            .deleteCookies()
            .resizeWindow(1280, 800);
    },

    end: function (browser) {
        browser.end();
    }
};

