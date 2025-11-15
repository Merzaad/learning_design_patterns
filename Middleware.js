const middlewares = [];

function use(mw) {
  middlewares.push(mw);
}

function run(req) {
  middlewares.forEach(mw => mw(req));
}
use(req => console.log("Logger:", req));
use(req => console.log("Auth check for:", req.user));

run({ user: "John" });
