# IsCron

Typescript property decorator for the crontab config validation

## Installation

```
npm install @kovalenko/is-cron
```

## Usage

```typescript
import {IsCron} from '@kovalenko/is-cron';

export class Foo {

  @IsCron()
  bar: string;

  @IsCron({useSeconds: true})
  baz: string;
  
  @IsCron({useSeconds: true}, {each: true})
  joj: string[];

  @IsCron({each: true})
  kek: string[];
}

```
