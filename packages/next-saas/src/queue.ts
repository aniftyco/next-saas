import Bull, { JobOptions, ProcessCallbackFunction, QueueOptions } from 'bull';

export class Queue {
  private bull = new Bull(global.__$NEXT_SAAS__.pkg.name, {
    redis: process.env.REDIS_URL,
    prefix: 'next-saas',
  } as QueueOptions);

  public async dispatch<Data = Record<string, any>>(name: string, data: Data, options?: JobOptions) {
    return this.bull.add({ $name: name, ...data }, options);
  }

  public async work(handler: ProcessCallbackFunction<any>) {
    return this.bull.process(handler);
  }
}

export const queue = new Queue();
