import {registerDecorator, ValidationOptions} from 'class-validator';
import {IsCronValidator} from './is-cron-validator';

export function IsCron(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isCron',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsCronValidator
    });
  };
}
