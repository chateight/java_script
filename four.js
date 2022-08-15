//
// operator
//

let val_null = null;
val_null = val_null ?? "initial";
console.log("value =", val_null);       // "initial"
//
let b_f;
console.log(b_f);       // undefined
console.log(b_f = 5);   // 5
console.log(b_f);       // 5
//
console.log(( 0 || undefined) && "hello");      // undefined
console.log(!( 0 || undefined) && "hello");     // hello
//
console.log( null ? "apple" : "banana");        // banana       ; ternary operator
console.log( null ?? "pineapple");              // pineapple    ; "null" combined operator
console.log( { apple: "100 yen" }?.fruit ?? "banana");   // banana  ; optional chainning operator
//