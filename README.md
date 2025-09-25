```markdown
# Rick & Morty Probability Game 🎲

## 📦 Installation

npm install
```

## ▶ Run the Game

Start the game with Node.js by passing arguments:

```bash
node index.js <boxes> <MortyClass>
```
### Arguments

- `<boxes>` — number of boxes (minimum 3).
- `<MortyClass>` — which Morty to use:

  - `ClassicMorty` - Removes random empty box
  - `LazyMorty` - Removes possible box
  - `EvilMorty` - Always removes box with the gun

## Examples

Run the game with 3 boxes and Classic Morty:

```bash
node index.js 3 ClassicMorty
```

Run the game with Lazy Morty:

```bash
node index.js 3 LazyMorty
```

Run the game with Evil Morty:

```bash
node index.js 3 EvilMorty
```



## 🧪 Tests

Run tests:

```bash
npm run test
```
