class CustomEventEmitter {
  private events: { [key: string]: Array<Function> };

  constructor() {
    this.events = {};
  }

  emit(event_name: string, ...args: any) {
    const callbacks = this.events[event_name];
    if (!callbacks || callbacks.length === 0) {
      console.log("no callbacks registered for " + event_name);
      return;
    }
    for (let i = 0; i < callbacks.length; i++) {
      const cb = callbacks[i];
      cb(...args);
    }
  }

  subscribe(event_name: string, new_callback: Function) {
    let callbacks = this.events[event_name];

    if (!callbacks) {
      this.events[event_name] = [];
      callbacks = this.events[event_name];
    }
    callbacks.push(new_callback);

    return {
      release: function () {
        const existing_callback_index = callbacks.indexOf(new_callback);
        if (existing_callback_index !== -1) {
          callbacks.splice(existing_callback_index, 1);
        }
      },
    };
  }
}

const cem = new CustomEventEmitter();

cem.emit("order", 1);

const delivery_subscriber = cem.subscribe("order", (id: number) => {
  console.log(`order ${id} placed for delivery`);
});

const vendor_subscriber = cem.subscribe("order", (id: number) => {
  console.log(`order ${id} placed to vendor`);
});

cem.emit("order", 2);
cem.emit("order", 3);
delivery_subscriber.release();
delivery_subscriber.release();
cem.emit("order", 4);
cem.emit("order", 5);
vendor_subscriber.release();
cem.emit("order", 6);
