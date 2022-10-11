import { ListaDoble } from "./listaDoble.js";

const ListaCompras = new ListaDoble();
const ListaSalidas = new ListaDoble();

const menu1 = `
1. COMPRAS
2. ALMACEN
3. INVENTARIO
4. SALIR
`;

while (true) {
  const op = prompt(menu1);
  if (op === "1") {
    const menu2 = `
    1. VER TODAS LAS SOLICITUDES
    2. CREAR NUEVA SOLICITUD DE COMPRA
    3. AUTORIZAR SOLICITUD DE COMPRA
    4. COTIZACIÓN DE LA COMPRA
    5. VER TODOS LOS CONTRATOS
    `;
    const op2 = prompt(menu2);
    if (op2 === "1") {
      ListaCompras.inicioFin();
      alert("Mostrando las solicitudes de compras por consola (F12)");
    }
    if (op2 === "2") {
      const soli = {
        id: "1",
        cliente: "area b1",
        responsable: "juan",
        autorizada: "si",
        fechaRegistro: new Date().toString(),
        items: {
          item1: {
            id: "20a",
            nombre: "lacteos",
            cantidad: 12,
            valorUnitario: 123,
          },
          item2: {
            id: "1a",
            nombre: "muebles",
            cantidad: 12,
            valorUnitario: 123,
          },
        },
      };
      ListaCompras.agregarNodo(soli);
      alert("Solicitud realizada");
    }
    if (op2 === "3") {
      const clt = prompt(`
      BUSCAR CLIENTE
      Nombre del cliente: `);
      if (ListaCompras.buscarNodo(clt)) {
        const newValue = prompt("Desea autorizar (si)/(no): ");
        ListaCompras.modificarNodo(clt, newValue);
        alert("Se ha autorizado correctamente");
      } else {
        console.log("No se encontró el cliente");
      }
    }
    if (op2 === "4") {
      // solo vamos a cotizar las solicitudes
      // que se encuentren autorizadas
      const clt = prompt(`
      BUSCAR CLIENTE
      Nombre del cliente: `);
      alert(ListaCompras.asignarCotizacion(clt));
    }
    if (op2 === "5") {
      ListaCompras.mostrarContratos();
      alert("Mostrando los contratos por consola (F12)");
    }
  }
  if (op === "2") {
    const menu3 = `
    1. ENTRADAS AL ALMACEN
    2. DESCAPACHAR LOS BIENES
    3. SALIDAS DEL ALMACEN
    `;
    const op3 = prompt(menu3);
    if (op3 === "1") {
      ListaCompras.mostrarContratos();
      alert("Mostrando las entradas al almacen (F12)");
    }
    if (op3 === "2") {
      const nick = prompt(`
      BUSCAR NICK
      Nick de la factura: `);
      const obj = ListaCompras.despacharBienes(nick);
      if (obj) {
        ListaSalidas.agregarNodo({
          salidaAlmacen: {
            nSalida: "01",
            fechaSalida: new Date().toString(),
            direccion: "Seccion de productos lacteos, estante 302",
          },
          ...obj,
        });
        alert("Se ha despachado el producto");
      } else {
        alert("No se ha encontrado la factura");
      }
    }
    if (op3 === "3") {
      ListaSalidas.inicioFin();
      alert("Mostrando las salidas del almacén");
    }
  }
  if (op === "3") {
    ListaSalidas.mostrarBienesSalidas();
    alert("Mostrando el inventario");
  }
  if (op === "4") break;
}
