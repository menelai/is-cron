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
}

```
