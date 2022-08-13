//
// window object(confirm)
//
if (confirm("Do you want to close the window?")){
    //window.close();       // not to close the window so that you can see JS result
}

// window method & property

setInterval(() => {
    console.log(window.innerWidth, window.innerHeight);
}, 1000);
//
// RegExp(similar to other languages)
//
const targetString1 = "001-0012, 001-001, 2.2-3042, wd3-2132, 124-56789";
const postalNumberPattern = /\d{3}[-]\d{4}[,]/g;
const results = targetString1.matchAll( postalNumberPattern );
for (const psNumber of results){
    console.log(psNumber[0].slice(0, 8));
}

const mailStringArray = ["example000@gmail.com", "example-0.00@gmail.com", "example-0.00@ex.co.jp", "example/0.00@ex.co.jp"];
const mailAddressPattern = /^[a-z0-9-.]+[@]\w+[.]\w+([.]\w+)*/g;
for ( let ptr = 0; ptr < mailStringArray.length; ptr++){
    const results_mail = mailStringArray[ptr].matchAll( mailAddressPattern );
    for (const mailAdd of results_mail){
        console.log(mailAdd[0]);
    }
}
//
// Storage object
//
localStorage.setItem("key_a", "gregg");
localStorage.setItem("key_b", "lemond");
//
// JSON
//

//
// stringfy
//
let json_string = {
    1: "a",
    2: "b",
    3: "c",
    a: 1,
    b: {bb: "21"}
}
// replacer : array
let replacer =  ["1", "2", "b"];

console.log(JSON.stringify(json_string, replacer, ));       // {"1":"a","2":"b","b":{}} : "replacer" acts as a filter
// replacer : function
function replacer_func(prop, value){
    if(typeof value === "string"){
        return undefined;
    }
    return value;
}

console.log(JSON.stringify(json_string, replacer_func));  // {"a":1,"b":{}} : except "string" were returned, both array and function works as recursively

let resume = JSON.parse(JSON.stringify(json_string, replacer_func));
console.log(resume);        // {a: 1, b: {…}}
console.log(resume.a);      // 1

