export class Nodo {
  value;
  siguiente;
  anterior;
  constructor() {
    this.value = null;
    this.siguiente = null;
    this.anterior = null;
  }
  obtenerValue() {
    return this.value;
  }
}
