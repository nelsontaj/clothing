"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItem = exports.toggleCartHidden = void 0;

var _cart = _interopRequireDefault(require("./cart.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toggleCartHidden = function toggleCartHidden() {
  return {
    type: _cart["default"].TOGGLE_CART_HIDDEN
  };
};

exports.toggleCartHidden = toggleCartHidden;

var addItem = function addItem(item) {
  return {
    type: _cart["default"].ADD_ITEM,
    payload: item
  };
};

exports.addItem = addItem;