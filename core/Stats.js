import CliTable from "cli-table3";

export class GameStats {
  constructor() {
    this.rounds = 0;
    this.winsSwitch = 0;
    this.winsStay = 0;
  }

  addResult({ stayed, win }) {
    this.rounds++;
    if (stayed && win) this.winsStay++;
    if (!stayed && win) this.winsSwitch++;
  }

  showTable() {
    const table = new CliTable({
      head: ["Game results", "Rick switched", "Rick stayed"],
    });

    table.push(
      ["Rounds", this.rounds, this.rounds],
      ["Wins", this.winsSwitch, this.winsStay],
      ["P (estimate)", "0.000", "0.000"],
      ["P (exact)", "0.500", "0.333"]
    );

    console.log(table.toString());
  }
}
