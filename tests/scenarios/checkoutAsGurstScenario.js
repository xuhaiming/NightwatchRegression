"use strict";

var steps = require("../stepDefinitions/steps");

var checkoutAsGuestScenario = {
    "Initialize browser": steps.common.initialize,
    "Go to homepage": steps.homePage.navigateToHomePage,
    "Navigate to women trench coats": steps.homePage.navigateToWomenTrenchCoats,
    "Navigate to first women prorsum": steps.productListPage.clickFirstProduct,
    "Change trench coat size": steps.productDetailPage.changeSize,
    "Go to bag page": steps.productDetailPage.checkout,
    "Click checkout button on bag page": steps.bag.checkout,
    "Checkout as guest": steps.bag.guestCheckout,
    "Fill personal information on order page": steps.orderPage.fillInformation,
    "Go to payment page": steps.orderPage.goToNextStep,
    "Pay with CUP": steps.paymentPage.cupPay,
    "Settle payment and refunded normally": steps.paymentPage.settlePayment,
    "See order summary on the screen": steps.confirmationPage.verifyOrderSummary,
    "Close browser": steps.common.end
};

module.exports = checkoutAsGuestScenario;