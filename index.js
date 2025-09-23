import { ArgsParser } from "./core/ParseArgs.js"
import { GameCore } from "./core/GameCore.js"
async function main() {
  try {
    const args = new ArgsParser(process.argv)
    const game = new GameCore(args)
    await game.start()
  } catch (err) {
    console.error("Error", err.message)
    process.exit(1)
  }
}

main()