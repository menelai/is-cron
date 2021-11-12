import {registerDecorator, ValidationOptions, isValidationOptions} from 'class-validator';
import {IsCronValidator} from './is-cron-validator';
import {InputOptions} from 'cron-validate/lib/types';

export function IsCron(validationOptions?: ValidationOptions): PropertyDecorator;
export function IsCron(options: InputOptions, validationOptions?: ValidationOptions): PropertyDecorator;

export function IsCron(options: InputOptions | ValidationOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  const opts = options && isValidationOptions(options) ? options : validationOptions;
  const constraints = options && !isValidationOptions(options) ? options : undefined;

  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isCron',
      constraints: [constraints],
      target: object.constructor,
      propertyName: propertyName,
      options: opts,
      validator: IsCronValidator
    });
  };
}
