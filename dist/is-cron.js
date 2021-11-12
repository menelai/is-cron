"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCron = void 0;
const class_validator_1 = require("class-validator");
const is_cron_validator_1 = require("./is-cron-validator");
function IsCron(options, validationOptions) {
    const opts = options && class_validator_1.isValidationOptions(options) ? options : validationOptions;
    const constraints = options && !class_validator_1.isValidationOptions(options) ? options : undefined;
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'isCron',
            constraints: [constraints],
            target: object.constructor,
            propertyName: propertyName,
            options: opts,
            validator: is_cron_validator_1.IsCronValidator
        });
    };
}
exports.IsCron = IsCron;
//# sourceMappingURL=is-cron.js.map