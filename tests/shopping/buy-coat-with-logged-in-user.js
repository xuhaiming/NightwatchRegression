module.exports = {
    'step one': function (browser) {
        browser
            .url('http://localhost:4242/')
            .waitForElementVisible('a[href="/women/"]', 10000)
            .moveToElement('a[href="/women/"]', 10, 10)
            .waitForElementVisible('li[data-link="/womens-trench-coats/"]', 10000)
            .click('li[data-link="/womens-trench-coats/"]')
            .waitForElementVisible('a[href="/womens-trench-coats/"]', 10000)
            .click('a[href="/womens-trench-coats/"]')
            .waitForElementVisible('a[href="/the-sandringham-short-heritage-trench-coat-p39004521"]', 10000)
            .click('a[href="/the-sandringham-short-heritage-trench-coat-p39004521"]')
            .waitForElementVisible('select[name="sku"]', 10000)
            .setValue('select[name="sku"]', '39004521001')
            .pause(10000)
            .end();
    },

    'step two': function (browser) {
        //browser
        //  .click('input[name="btnK"]')
        //  .pause(1000)
        //  .assert.containsText('#main', 'Night Watch')
        //  .end();
    }
};