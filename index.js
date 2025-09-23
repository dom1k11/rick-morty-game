import { ArgsParser } from "./core/ParseArgs.js"

async function main() {
  try {
    const args = new ArgsParser(process.argv)
    console.log("Number of boxes", args.n)
  } catch (err) {
    console.error("Error", err.message)
    process.exit(1)
  }
}

main()