//Deep equal
let john = 
{
    firstName: 'John',
    lastName: 'Doe'
  }


function deepEqual(a, b) 
{
    if(typeof(a)==="object") //Si a es un objeto
    {
        if (Object.keys(a).length == Object.keys(b).length) 
        {   
            for (var i = 0; i< Object.keys(a).length; i++) 
            {
                return deepEqual(Object.values(a)[i], Object.values(b)[i]);
            }
        }
    }
    return a === b;
};

console.log("Ejercicio Deep Equal:")
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) //false
console.log("\n");
 
//Chunk
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function chunk(array, size) 
{
  let newData = []; 
  for (let i = 0; i < array.length; i = i+size) 
    newData.push(array.slice(i, i + size));
  return newData;
}

console.log("Ejercicio Chunk:")
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log("\n");


//Frequency
function frequency(string) 
{
    frequencies = [];
    for (const char of string) {
        // Buscar el carácter y sumar la frecuencia
        let i = 0;
        while(i < frequencies.length) {
            if(frequencies[i].character === char) {
                frequencies[i].frequency++;
                break;
            }
            i++;
        }
        // El carácter no está en el arreglo
        if(i === frequencies.length) {
            frequencies.push({character: char, frequency: 1});
        }
    }

    frequencies.sort(function(a,b) {
        if(b.character < a.character)
            return 1;

        return -1;
    });

    // Imprimir
    // let impresion = '{';
    // for (const freq of frequencies) {
    //     impresion += freq.character + ': ' + freq.frequency + ', ';
    // }
    // impresion += '}';
    let impresion = '{';
    var i = 0;
    while (i < frequencies.length)
    {
        if (i == frequencies.length-1)
            impresion += frequencies[i].character + ': ' + frequencies[i].frequency + '}';
        else
            impresion += frequencies[i].character + ': ' + frequencies[i].frequency + ', ';
        i++;
    }
    return impresion;
}

console.log("Ejercicio Frequency:")
console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}