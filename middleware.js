class MiddlewareManager {
  constructor() {
    this.middlewares = [];
  }

  use(fn) {
    this.middlewares.push(fn);
  }
  run(context) {
    let index = 0;
    const next = () => {
      if (index >= this.middlewares.length) return;
      const currentMiddleware = this.middlewares[index++];
      currentMiddleware(context, next);
    };
    next();
  }
}

const app = new MiddlewareManager();

app.use((context, next) => {
  if (context.token === undefined) {
    console.log(`id: ${context.id} token: undefined`);
    return;
  }
  console.log(`id: ${context.id} token: ${context.token}`);
  next();
});

app.use((context) => {
  console.log(`id: ${context.id} request: ${context.url}`);
});

app.run({ id: 1, url: "/url", token: "abc" });
app.run({ id: 2, url: "test" });
