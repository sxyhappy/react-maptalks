export type EventHandler = (eventsOn: string, handler: (...args: any) => void, context?: any) => void

export declare class MapEvent {
  on: EventHandler;
  addEventListener: EventHandler;
  once: EventHandler;
  off: EventHandler;
  removeEventListener: EventHandler;
  listens: EventHandler;
  copyEventListeners: (target: Record<string, unknown>) => this;
  fire: (eventType: string, param: any) => this;
}
