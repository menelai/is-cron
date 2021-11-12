import { ValidationOptions } from 'class-validator';
import { InputOptions } from 'cron-validate/lib/types';
export declare function IsCron(validationOptions?: ValidationOptions): PropertyDecorator;
export declare function IsCron(options: InputOptions, validationOptions?: ValidationOptions): PropertyDecorator;
