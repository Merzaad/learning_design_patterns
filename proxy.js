const target = {
  name: "M",
  age: 25,
  _secret: "hidden",
}

const handler = {
  get(target, prop, receiver) {
    console.log(`[GET] ${String(prop)}`)
    if (prop === "_secret") return "🔒 Classified"
    return target[prop]
  },

  set(target, prop, value, receiver) {
    console.log(`[SET] ${String(prop)} = ${value}`)
    if (prop === "age" && value < 0) {
      throw new Error("Age can't be negative")
    }
    target[prop] = value
    return true
  },

  has(target, prop) {
    console.log(`[HAS] ${String(prop)} in object?`)
    if (prop === "_secret") return false
    return prop in target
  },
  deleteProperty(target, prop) {
    console.log(`[DELETE] ${String(prop)}`)
    if (prop === "name") {
      console.log("Cannot delete name!")
      return false
    }
    delete target[prop]
    return true
  },
}

const proxy = new Proxy(target, handler)
console.log(proxy.name)
console.log(proxy._secret)
proxy.age = 30
console.log("name" in proxy)
console.log("_secret" in proxy)
delete proxy.name
delete proxy.age
