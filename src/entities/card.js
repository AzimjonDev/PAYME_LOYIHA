"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(number, password, expiry, type, ownerId, bankName) {
        this.number = number;
        this.password = password;
        this.expiry = expiry;
        this.type = type;
        this.ownerId = ownerId;
        this.bankName = bankName;
        this.balance = 0;
    }
    Card.prototype.getId = function () {
        return this.id;
    };
    Card.prototype.setId = function (newId) {
        this.id = newId;
    };
    Card.prototype.depositeBalance = function (funds) {
        var money = this.balance;
        money += funds;
        this.balance = money;
    };
    return Card;
}());
exports.Card = Card;
