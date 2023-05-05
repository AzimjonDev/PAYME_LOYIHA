"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("./entities");
var main_service_1 = require("./services/main-service");
var mainService = new main_service_1.MainService();
var mark = new entities_1.User("Mark", "Tween", "+998991234567", "root123");
var kent = new entities_1.User("Kent", "John", "+998991234512", "root124");
mainService.register(mark, kent);
var card = new entities_1.Card("8600 1348 1111 2223", "7777", "12/24", "UZCARD", mark.getId(), "TBC BANK");
var card2 = new entities_1.Card("8600 1348 1111 2222", "7777", "12/24", "UZCARD", kent.getId(), "TBC BANK");
mainService.registerCard(card, card2);
try {
    card.depositeBalance(1000);
    card.depositeBalance(2000);
    card2.depositeBalance(5000);
    mainService.transaction(card2, card, 2000);
    console.log(mainService.getCardList());
}
catch (error) {
    console.log();
    console.error("----- |" + error.message + "| ------");
    console.log();
}
