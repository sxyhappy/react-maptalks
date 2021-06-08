export type EventHandler = (eventsOn: string, handler: () => void, context: any) => void

export interface MapEvent {
  on: EventHandler;
  addEventListener: EventHandler;
  once: EventHandler;
  off: EventHandler;
  removeEventListener: EventHandler;
  listens: EventHandler;
  copyEventListeners: (target: Record<string, unknown>) => this;
  fire: (eventType: string, param: any) => this;
}
