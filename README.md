# wing-timer

## Install

```shell
$ npm install wing-timer
```

## Usage

```ts
import { Timeout, Interval } from 'wing-timer';

const timer = new Timeout(1000, () => {
  console.log('Timeout timer excuted.');
});

function start() {
  timer.start();
}

function stop() {
  if (timer.excuted) timer.clear();
}
```
