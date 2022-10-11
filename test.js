const productos = {
  ob1: {
    name: "patrick",
  },
  ob2: {
    name: "aisjdofji",
  },
};

// insertar objetos en un objeto
const number = "ob3"+2;
const a = {
  number: {
    name: "rios",
  },
};

// convertir a string a un objeto
let string = `{
  "${number}": {
    "a": "rios"
  }
}`;
let string2 = `{"p": 5}`;
console.log(JSON.parse(string2));
console.log(JSON.parse(string));

// const b = Object.defineProperty(productos, number, {
//   name: "rios",
// });
const newProductos = { ...productos, ...a };

// console.log(productos);
let perro = {
  ob1: {
    name: "patrick",
  },
  ob2: {
    name: "aisjdofji",
  },
};
let i = 1
for (let clave in perro){
  console.log(perro[`ob${i}`].name);
  i++
}