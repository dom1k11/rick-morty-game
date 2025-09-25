export class AbstractMorty {
  constructor(n, random) {
    this.n = n;
    this.random = random;
  }

  hidePortalGun() {
    throw new Error("Not implemented");
  }
  chooseBoxToRemove(rickChoice) {
    throw new Error("Not implemented");
  }
  revealAll() {
    throw new Error("Not implemented");
  }
  verify() {
    throw new Error("Not implemented");
  }
}
