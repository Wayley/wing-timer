import Register from 'wing-register';

export interface ITimer<T> {
  get excuted(): boolean;
  start(delay?: number, callback?: (ctx: T) => void): void;
  clear(): void;
}

export class Timer<T> implements ITimer<T> {
  get excuted() {
    return !!this._excuted;
  }
  protected _excuted?: boolean;
  protected _timer?: number;

  protected _register: Register<(ctx: T) => void>;

  constructor(protected _delay?: number, _callback?: (ctx: T) => void) {
    this._register = new Register();
    this._excuted = false;
    if (_callback) this._register.register(_callback);
  }

  start(delay?: number, callback?: (ctx: T) => void): void {
    if (delay != undefined) this._delay = delay;
    if (callback) this._register.register(callback);
  }
  clear(): void {
    this._register.clear();
  }
}

export class Timeout extends Timer<Timeout> {
  constructor(delay?: number, callback?: (ctx: Timeout) => void) {
    super(delay, callback);
  }

  start(delay?: number, callback?: (ctx: Timeout) => void): void {
    super.start(delay, callback);
    const timer: unknown = setTimeout(() => {
      this._excuted = true;
      this._register.excute();
    }, this._delay);
    this._timer = timer as number;
  }

  clear(): void {
    super.clear();
    this._timer && clearTimeout(this._timer);
  }
}

export class Interval extends Timer<Interval> {
  constructor(delay?: number, callback?: (ctx: Interval) => void) {
    super(delay, callback);
  }

  start(delay?: number, callback?: (ctx: Interval) => void): void {
    super.start(delay, callback);
    const timer: unknown = setInterval(() => {
      if (!this._excuted) this._excuted = true;
      this._register.excute();
    }, delay);
    this._timer = timer as number;
  }

  clear(): void {
    super.clear();
    this._timer && clearInterval(this._timer);
  }
}

export default Timer;
