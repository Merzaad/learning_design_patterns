class EventManager {
  actions = new Map()
  on(type, action) {
    const actions = this.actions.get(type) || []
    actions.push(action)
    this.actions.set(type, actions)
  }
  emit(type, payload) {
    const actions = this.actions.get(type)
    if (!actions) return
    actions.forEach((action) => {
      action(payload)
    })
  }
}

const ivent = new EventManager()

ivent.on("print", (payload) => console.log("1", payload))

ivent.on("print", (payload) => console.log("2", payload))

ivent.emit("print", "ivent")
