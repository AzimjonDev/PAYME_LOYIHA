"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.list = [];
        this.counterID = 0;
    }
    UserRepository.prototype.add = function (Users) {
        for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
            var user = Users_1[_i];
            if (this.isExist(user.phoneNumber))
                throw new Error("".concat(user.phoneNumber, " is already exist"));
            user.setId(++this.counterID);
            this.list.push(user);
        }
    };
    UserRepository.prototype.isExist = function (phoneNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.phoneNumber === phoneNumber)
                return true;
        }
        return false;
    };
    UserRepository.prototype.getByPhoneNumber = function (phoneNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.phoneNumber === phoneNumber)
                return user;
        }
        throw new Error("".concat(phoneNumber, " is not exist"));
    };
    UserRepository.prototype.getById = function (id) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getId() === id)
                return user;
        }
        throw new Error("".concat(id, " is not exist"));
    };
    UserRepository.prototype.getList = function () {
        return this.list;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
