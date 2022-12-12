function combinarObjetos(objA, objB) {
  const array = [objA, objB];
  let ObjR = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let key in element) {
      const value = element[key];
      if (!ObjR[key]) {
        ObjR[key] = value;
      }
    }
  }
  return ObjR;
}

console.log(combinarObjetos({ a: 1, b: 2, c: 3 }, { d: 4, b: 5, e: 6 }));
console.log(combinarObjetos({ a: 1, b: 2, c: 3 }, { a: 4, d: 5, e: 6 }));
console.log(combinarObjetos({ a: 1, b: 2, c: 3 }, { d: 4, b: 5, c: 6 }));
