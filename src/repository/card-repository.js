"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
var CardRepository = /** @class */ (function () {
    function CardRepository() {
        this.list = [];
        this.counterID = 0;
    }
    CardRepository.prototype.add = function (newCards) {
        for (var _i = 0, newCards_1 = newCards; _i < newCards_1.length; _i++) {
            var newCard = newCards_1[_i];
            if (this.isExist(newCard.number))
                throw new Error("".concat(newCard.number, " is already exist"));
            newCard.setId(++this.counterID);
            this.list.push(newCard);
        }
    };
    CardRepository.prototype.isExist = function (cardNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.number === cardNumber)
                return true;
        }
        return false;
    };
    CardRepository.prototype.getCardsByOwnerID = function (ownerID) {
        var cards = [];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.ownerId === ownerID)
                cards.push(card);
        }
        return cards;
    };
    CardRepository.prototype.getList = function () {
        return this.list;
    };
    CardRepository.prototype.transactionCard = function (senderCard, recieverCard, funds) {
        if (senderCard.balance < funds)
            throw new Error("".concat(senderCard.number, " is not enough funds"));
        senderCard.balance -= funds;
        recieverCard.balance += funds;
    };
    ;
    return CardRepository;
}());
exports.CardRepository = CardRepository;
