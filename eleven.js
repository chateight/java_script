// collections

//
// Array
//
let array_sample = ["cat", "dolphin", "cow", "pig"];
array_sample.push("monkey");            // push to the end
console.log(array_sample);

array_sample.unshift("elephant");       // insert to the top
console.log(array_sample);

array_sample.shift();                   // delete the top of the array
console.log(array_sample);

console.log(array_sample.pop());        // pop up the last element

console.log(array_sample.slice(0,2));   // slice does not modify original array
console.log(array_sample.splice(0, 2)); // splice(modify th eoriginal array) from the element

console.log(array_sample.concat(["whale"]));   // create a new array["cow", "pig", "whale"]

// numerical sort of the Array
const array_num = [32, 6, 14, 92, 46, 29, 18];

function ascend( a, b ){
    return a - b;               // descend case "b - a"
}

console.log( array_num.sort( ascend )); 

// static method("from") --- conver from "Array like" to "Array"
const set = new Set([5, 4, 3, 2, 1]);

const cnv_to_array = Array.from( set );
console.log(cnv_to_array);

console.log(Array.isArray(cnv_to_array));       // true

// arugment as a callback funtion
let array_func = ["d", "r", "t", "q", "k"];
array_func.forEach(function(val, index, array_da){
    console.log(val, index);
});

// Destructuring assignment(Array)
let array_da = [8, 6, 4, 2, 0];
let [ a, b, c, d ] = array_da;

console.log(d, c, b, a);    // "2 4 6 8", 0 was not used

// Destructuring assignment(object)
let {monkey, pig, dog} = {monkey: "japan", pig: "U.K", dog: "turkey"};  // variables need to be matched to properties
console.log(dog);       // "turkey"

//
// Set
//
const animals = ["dolphin", "zebra", "camel", "sheep", "zebra"];
const animals_ = new Set(animals);  
console.log(animals_);      // Set(4) {'dolphin', 'zebra', 'camel', 'sheep'} ; ”Set" does not permit duplications of the value

//
// Map(key: value set management, similar to the object)
//
// WeakMap: unused key set is deleted using garbage collection, it means "Map" has a possibility causing memory leak
//
const mapSample = new Map([["key1", "value1"],["key2", "value2"],["key3", "value3"]]);

console.log(mapSample);     //  {"key1" => "value1"} ,,,, ; to produce Map object using the 2 dimension array

const mapKey_variety = new Map();
mapKey_variety.set("a", "ambition");    // you can use various kind of keys
mapKey_variety.set([], "empty_array");  // "set" method is used for to add key/value pair
mapKey_variety.set(false, "false");

console.log(mapKey_variety);            // 0: {"a" => "ambition"} 1: {Array(0) => "empty_array"} 2: {false => "false"}

console.log(mapKey_variety.has("a"));   // "true" ; "has" method inquires "Map" has it or not 

const obj_map = Object.fromEntries(mapKey_variety);     // to generate object using "Object.fromEntries()" method
console.log(obj_map);                                   // "": "empty_array" a: "ambition" false: "false"

