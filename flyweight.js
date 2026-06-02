class WordFlyweight {
  constructor(word) {
    this.length = word.length
    this.word = word
  }
}

class WordFactory {
  constructor() {
    this.words = {}
  }

  getLength(word) {
    if (!this.words[word]) {
      this.words[word] = new WordFactory(word)
    }
    return this.words[word]
  }
  getCount() {
    return Object.keys(this.words).length
  }
}

const factory = new WordFactory()

const words = ["test", "fly", "weight", "test", "fly"]

for (const word of words) {
  const flyweight = factory.getLength(word)
}

console.log(`\nTotal flyweight objects created: ${factory.getCount()}`)
