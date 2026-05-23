class Connection {
  constructor() {
    if (Connection.instance) {
      return Connection.instance;
    }

    this.connectionId = Math.random();
    this.isConnected = false;

    Connection.instance = this;
  }

  connect() {
    if (!this.isConnected) {
      console.log(`connected (connectionId: ${this.connectionId})`);
      this.isConnected = true;
    }
    return this;
  }

  request(req) {
    if (!this.isConnected) {
      throw new Error("not connected!");
    }
    console.log(`executing: ${req}, connectionId: ${this.connectionId}`);
  }
}

const connection1 = new Connection();
const connection2 = new Connection();

try {
  connection1.request("test");
} catch (error) {
  console.log(error.message);
}
connection1.connect();
connection2.connect();
connection1.request("post");
connection2.request("get");
