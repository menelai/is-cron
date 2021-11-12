import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsCronValidator implements ValidatorConstraintInterface {
    validate(id: string, args: ValidationArguments): boolean;
    defaultMessage(validationArguments?: ValidationArguments): string;
}
