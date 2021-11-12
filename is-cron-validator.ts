import {buildMessage, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import cron from 'cron-validate';

@ValidatorConstraint()
export class IsCronValidator implements ValidatorConstraintInterface {

  validate(id: string, args: ValidationArguments): boolean {
    return cron(id ?? '').isValid();
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return buildMessage(eachPrefix => eachPrefix + `$property must be a Valid Cron`)();
  }

}
