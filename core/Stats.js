import CliTable from "cli-table3";

export class GameStats {
  constructor(n) {
    this.n = n;
    this.rounds = 0;
    this.roundsStay = 0;
    this.roundsSwitch = 0;
    this.winsStay = 0;
    this.winsSwitch = 0;
  }

  addResult({ stayed, win }) {
    this.rounds++;
    if (stayed) {
      this.roundsStay++;
      if (win) this.winsStay++;
    } else {
      this.roundsSwitch++;
      if (win) this.winsSwitch++;
    }
  }

  showTable() {
    const estStay =
      this.roundsStay > 0
        ? (this.winsStay / this.roundsStay).toFixed(3)
        : "0.000";
    const estSwitch =
      this.roundsSwitch > 0
        ? (this.winsSwitch / this.roundsSwitch).toFixed(3)
        : "0.000";

    const exactStay = (1 / this.n).toFixed(3);
    const exactSwitch = ((this.n - 1) / this.n).toFixed(3);

    const table = new CliTable({
      head: ["Game results", "Rick switched", "Rick stayed"],
    });

    table.push(
      ["Rounds", this.roundsSwitch, this.roundsStay],
      ["Wins", this.winsSwitch, this.winsStay],
      ["P (estimate)", estSwitch, estStay],
      ["P (exact)", exactSwitch, exactStay]
    );

    console.log(table.toString());
  }
}
