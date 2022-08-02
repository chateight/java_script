// basic exception handling
//
try{
    let b_e = 10 + a_e;
    console.log(b_e);
} catch(error){
    console.error(error.name);
    console.error(error.message);
} finally{
    console.log("closing message");
}
//
// throw function
//
try{
    throw new EvalError("caused exception");    // to create Error instance
} catch (error){
    console.log(error);
}
//
try{
    let str_e = "";         // one of the exception causes will be catched
    str_e = str_ne;
    let div_e = 1;
    div_e.toUpperCase();
} catch(error){
    if ( error instanceof TypeError){
        console.log("type error");
    }
    if ( error instanceof ReferenceError){
        console.log("reference error")
    }
}
//
// usual "for" loop
//
const array_int = [ 12, 32, 56, 27, 72 ];
let sum = 0;
for(let i = 0; i < array_int.length; i++){
    sum += array_int[i];
    array_int[i] = array_int[i]*2;          // elements of the const array can be modified
}
console.log( array_int, 'sum =', sum);
//
const animal = {1:"rat", 2:"rabbit", 3:"dog", 4:"cat", 5:"lion"};
for (const key in animal){
    console.log('number',key,animal[key]);  // usually not guarantee the order
}
//
// (key ... in) enumerable objects
//
const number_array = { proc1: 43, proc2: 92, proc3: 27, skip: 32, proc4: 91, proc5: 47};
let sum_array = 0;
for (const key in number_array){
    if (key !== "skip"){
        sum_array += number_array[key];
    }
}
console.log(sum_array);     // 300
//
// "length" property of the array is not enumerable
//
let some_array = [1, 2];
const propLength = Reflect.getOwnPropertyDescriptor(some_array, "length");
console.log(propLength.enumerable);     // false
console.log(propLength.value);          // 2
console.log(propLength.writable);       // true
//
// (key ... of) iterable objects
//
const animal_itr = ["rat", "rabbit", "dog", "cat", "lion"];
for (const val of animal_itr){
    console.log(val);
}
//
// using Object.keys to transform the non enumerable object to the enumerable object
//
const some_obj = {
    prop1: 10,
    prop2: "string",
    prop3: 30,
    prop4: true,
    skip: 20,
    prop5: 40,
    prop6: 50,
    prop7: 60
};
let sum_obj = 0;
const props = Object.keys(some_obj);
for (const prop of props){
    if (prop !== "skip" && "number" === typeof(some_obj[prop])){
        sum_obj += some_obj[prop];
    }
}
console.log(sum_obj);       // 190
