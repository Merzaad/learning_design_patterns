class StockMarket {
  constructor() {
    this.stocks = {}
    this.observers = []
  }

  subscribe(observerFn) {
    this.observers.push(observerFn)
  }

  notify(data) {
    this.observers.forEach((observerFn) => {
      observerFn(data)
    })
  }

  updateStock(symbol, price) {
    const oldPrice = this.stocks[symbol]
    this.stocks[symbol] = price

    this.notify({
      symbol,
      oldPrice,
      newPrice: price,
      change: oldPrice ? price - oldPrice : 0,
      timestamp: new Date(),
    })
  }
}

class Logger {
  onStockChange(data) {
    console.log(
      `[LOG] ${data.timestamp.toISOString()} - ${data.symbol}: ${data.change}`,
    )
  }
}

const market = new StockMarket()
const logger = new Logger()

market.subscribe((data) => logger.onStockChange(data))

market.updateStock("AAPL", 150)
market.updateStock("GOOGL", 2800)
market.updateStock("AAPL", 162)
market.updateStock("AAPL", 148)
