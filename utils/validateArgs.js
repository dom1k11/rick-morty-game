export function validateArgs(argv) {
  if (argv.length < 4) {
    throw new Error("Usage: node index.js <boxes> <MortyPath> [MortyClass]");
  }

  const n = parseInt(argv[2], 10);
  if (isNaN(n) || n < 3) {
    throw new Error("Number of boxes must be >= 3");
  }

  return { n, mortyPath: argv[3], mortyClassName: argv[4] };
}
