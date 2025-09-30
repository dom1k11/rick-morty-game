import path from "path";
import { pathToFileURL } from "url";

export async function loadMorty(mortyPath, mortyClassName) {
  const absPath = path.resolve(mortyPath);
  const modulePath = pathToFileURL(absPath).href;

  const module = await import(modulePath);

  const className = mortyClassName || path.basename(mortyPath, ".js");
  const MortyClass = module[className] || module.default;

  if (!MortyClass) {
    throw new Error(`Class ${className} not found in ${mortyPath}`);
  }

  return MortyClass;
}
