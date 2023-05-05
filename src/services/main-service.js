"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
var repository_1 = require("../repository");
var MainService = /** @class */ (function () {
    function MainService() {
        this.userRepository = new repository_1.UserRepository();
        this.cardRepository = new repository_1.CardRepository();
    }
    MainService.prototype.getCardsByPhoneNumber = function (phoneNumber) {
        var id = this.userRepository.getByPhoneNumber(phoneNumber).getId();
        return this.cardRepository.getCardsByOwnerID(id);
    };
    MainService.prototype.getCardList = function () {
        return this.cardRepository.getList();
    };
    MainService.prototype.getUserList = function () {
        return this.userRepository.getList();
    };
    MainService.prototype.register = function () {
        var user = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            user[_i] = arguments[_i];
        }
        this.userRepository.add(user);
    };
    MainService.prototype.registerCard = function () {
        var card = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            card[_i] = arguments[_i];
        }
        this.cardRepository.add(card);
    };
    MainService.prototype.transaction = function (senderCard, recieverCard, funds) {
        this.cardRepository.transactionCard(senderCard, recieverCard, funds);
    };
    return MainService;
}());
exports.MainService = MainService;
