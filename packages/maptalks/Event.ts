export type EventHandler = (eventsOn: string, handler: () => void, context: any) => void

export interface Event {
  on: EventHandler;
  addEventListener: EventHandler;
  once: EventHandler;
  off: EventHandler;
  removeEventListener: EventHandler;
  listens: EventHandler;
}
