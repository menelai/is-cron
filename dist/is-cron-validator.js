"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCronValidator = void 0;
const class_validator_1 = require("class-validator");
const cron_validate_1 = __importDefault(require("cron-validate"));
let IsCronValidator = class IsCronValidator {
    validate(id, args) {
        return cron_validate_1.default(id !== null && id !== void 0 ? id : '', args.constraints[0]).isValid();
    }
    defaultMessage(validationArguments) {
        return class_validator_1.buildMessage(eachPrefix => eachPrefix + `$property must be a Valid Cron`)();
    }
};
IsCronValidator = __decorate([
    class_validator_1.ValidatorConstraint()
], IsCronValidator);
exports.IsCronValidator = IsCronValidator;
//# sourceMappingURL=is-cron-validator.js.map