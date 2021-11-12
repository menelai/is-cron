# IsCron

Typescript property decorator for the crontab config validation

## Installation

```
npm install @kovalenko/is-cron
```

## Usage
```typescript
function IsCron(): PropertyDecorator;
function IsCron(options: InputOptions): PropertyDecorator;
function IsCron(options: ValidationOptions): PropertyDecorator;
function IsCron(cronOptions: InputOptions, options: ValidationOptions): PropertyDecorator;
```

### Basic
```typescript
import {IsCron} from '@kovalenko/is-cron';

export class Foo {

  @IsCron()
  bar: string;
}

```

### With `InputOptions`
```typescript
import {IsCron} from '@kovalenko/is-cron';
import {InputOptions} from 'cron-validate/lib/types';

const cronOptions: InputOptions = {
  override: {
    useSeconds: true,
  },
};

export class Foo {

  @IsCron(cronOptions)
  baz: string[];
}

```

### With `ValidationOptions`
```typescript
import {IsCron} from '@kovalenko/is-cron';

export class Foo {

  @IsCron({each: true})
  baz: string[];
}

```

### With `InputOptions` and `ValidationOptions`

```typescript
import {IsCron} from '@kovalenko/is-cron';
import {InputOptions} from 'cron-validate/lib/types';

const cronOptions: InputOptions = {
  override: {
    useSeconds: true,
  },
};

export class Foo {

  @IsCron(cronOptions, {each: true})
  baz: string[];
}

```
