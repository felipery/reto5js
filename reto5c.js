function sumarValoresObjeto(obj) {
  let total = 0;
  for (let key in obj) {
    const value = obj[key];
    total += value;
  }
  return total;
}

console.log(sumarValoresObjeto({ a: 1, b: 2, c: 3 }));
console.log(sumarValoresObjeto({ j: 9, i: 2, x: 3, z: 4 }));
console.log(sumarValoresObjeto({ w: 15, x: 22, y: 13 }));
