"use strict";

var homePageSteps = require("./pageSteps/homePageSteps");
var productListPageSteps = require("./pageSteps/productListPageSteps");
var productDetailPageSteps = require("./pageSteps/productDetailPageSteps");
var bagSteps = require("./pageSteps/bagSteps");
var orderPageSteps = require("./pageSteps/orderPageSteps");
var paymentPageSteps = require("./pageSteps/paymentPageSteps");
var confirmationPageSteps = require("./pageSteps/confirmationPageSteps");
var commonSsteps = require("./pageSteps/commonSteps");

module.exports = {
  common: commonSsteps,
  homePage: homePageSteps,
  productListPage: productListPageSteps,
  productDetailPage: productDetailPageSteps,
  bag: bagSteps,
  orderPage: orderPageSteps,
  paymentPage: paymentPageSteps,
  confirmationPage: confirmationPageSteps
};
