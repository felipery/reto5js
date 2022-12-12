function borrarPropiedadObject(obj, key) {
  delete obj[key];
  return obj;
}

console.log(borrarPropiedadObject({ a: 1, b: 2, c: 3 }, 'b'));
console.log(borrarPropiedadObject({ a: 1, b: 2, c: 3 }, 'a'));
console.log(borrarPropiedadObject({ a: 1, b: 2, c: 3 }, 'c'));
