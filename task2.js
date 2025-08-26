  export class Player {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }
}
const jugador1 = new Player("Javiera", 3);
console.log(jugador1.nombre); // Muestra: Javiera
console.log(jugador1.nivel);  // Muestra: 3