"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCron = void 0;
const class_validator_1 = require("class-validator");
const is_cron_validator_1 = require("./is-cron-validator");
function IsCron(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'isCron',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: is_cron_validator_1.IsCronValidator
        });
    };
}
exports.IsCron = IsCron;
//# sourceMappingURL=is-cron.js.map