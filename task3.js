export class Player {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }

  info() {
    console.log(`${this.nombre} ha alcanzado el nivel ${this.nivel}!`);
  }
}
const jugador1 = new Player("Javiera", 6);
jugador1.info(); 
