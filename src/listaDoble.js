import { Nodo } from "./nodo.js";
export class ListaDoble {
  primero;
  ultimo;
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }
  agregarNodo(value) {
    let nuevo = new Nodo();
    nuevo.value = value;

    if (this.primero === null) {
      this.primero = nuevo;
      this.ultimo = nuevo;
    } else {
      this.ultimo.siguiente = nuevo;
      nuevo.anterior = this.ultimo;
      this.ultimo = nuevo;
    }
  }
  // ver los valores de los nodos en ambas direcciones
  inicioFin() {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.siguiente;
    }
  }
  finInicio() {
    let pivo = new Nodo();
    pivo = this.ultimo;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.anterior;
    }
  }
  // mostrar todos los contratos
  mostrarContratos() {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value.nick) {
        console.log(pivo.value);
      }
      pivo = pivo.siguiente;
    }
  }

  // buscar nodo
  buscarNodo(value) {
    let pivo = new Nodo();
    pivo = this.primero;
    let encontrar = false;
    while (pivo != null) {
      if (pivo.value.cliente === value) encontrar = true;
      pivo = pivo.siguiente;
    }
    return encontrar;
  }
  asignarCotizacion(value) {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value.cliente === value) {
        if (pivo.value.autorizada === "si") {
          const nProve = prompt("Nombre del proveedor: ");
          const costoProve = prompt("Costo de cotización: ");
          pivo.value = {
            nick: "000001",
            ...pivo.value,
            cotizacion: { nProve, costoProve },
          };
          return "Se ha cotizado correctamente";
        }
        return "La solicitud no se encuentra autorizada";
      }
      pivo = pivo.siguiente;
    }
    return "No se encontró el cliente";
  }
  modificarNodo(value, newValue) {
    let pivo = new Nodo();
    pivo = this.primero;
    let encontrar = false;
    while (pivo != null) {
      if (pivo.value.cliente === value) {
        pivo.value.autorizada = newValue;
        console.log(pivo.value.autorizada);
        encontrar = true;
      }
      pivo = pivo.siguiente;
    }
    return encontrar;
  }
  despacharBienes(value) {
    let check;
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value.nick === value) {
        check = pivo.value;
        if (pivo === this.primero && pivo === this.ultimo) {
          this.primero = this.ultimo = null;
          break;
        }
        if (pivo === this.primero) {
          this.primero = pivo.siguiente;
          this.primero.anterior = null;
          break;
        }
        if (pivo === this.ultimo) {
          this.ultimo = pivo.anterior;
          this.ultimo.siguiente = null;
          break;
        }
        pivo.siguiente.anterior = pivo.anterior;
        pivo.anterior.siguiente = pivo.siguiente;
      }
      pivo = pivo.siguiente;
    }
    return check;
  }
  mostrarBienesSalidas() {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      const responsable = pivo.value.responsable;
      const direccion = pivo.value.salidaAlmacen.direccion;
      const salida = pivo.value.salidaAlmacen.fechaSalida;
      const items = pivo.value.items;
      let i = 1;
      for (let clave in items) {
        const codigo = items[`item${i}`].id;
        const nombre = items[`item${i}`].nombre;
        console.log({ codigo, nombre, responsable, salida, direccion });
        i++;
      }
      // nombre producto, responsable, fecha salida, direcion
      pivo = pivo.siguiente;
    }
  }
  // eliminar nodo
  eliminarNodo(value) {
    let check = false;
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (JSON.stringify(pivo.value) == JSON.stringify(value)) {
        check = true;
        if (pivo === this.primero && pivo === this.ultimo) {
          this.primero = this.ultimo = null;
          break;
        }
        if (pivo === this.primero) {
          this.primero = pivo.siguiente;
          this.primero.anterior = null;
          break;
        }
        if (pivo === this.ultimo) {
          this.ultimo = pivo.anterior;
          this.ultimo.siguiente = null;
          break;
        }
        pivo.siguiente.anterior = pivo.anterior;
        pivo.anterior.siguiente = pivo.siguiente;
      }
      pivo = pivo.siguiente;
    }
    return check
      ? console.log("Nodo eliminado")
      : console.log("El nodo no ha sido encontrado");
  }
  // vaciar lista
  vaciarLista() {
    this.primero = this.ultimo = null;
  }
}
