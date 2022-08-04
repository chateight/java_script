//
// scope
//
let val = "global";
function fn1(){
    let val = "internal of the function";

    if(Math.random() < .7){
        console.log(val);       // "internal of the function"
        fn1();          // recursive call( "< .x" makes terminate condition )
    }

    function fn2(){
        console.log(val);       // "internal of the function"
    }

    console.log(val);           // "internal of the function"

    fn2();
    return val;
}

function fn3(){
    console.log(val);   // "global"
}

console.log(val);       // "global"

const res = fn1();
console.log(res);       // "internal of the function"
fn3();
//
// closure
//
function delayMessageFactory(func, delay){
    function innerFn(msg){
        setTimeout(func(msg), delay);
    }
    return innerFn;
}

const dialog = delayMessageFactory( alert, 2000);
dialog(" hello from the closure");

const log = delayMessageFactory( console.log, 1000);
log(" bye from the closure");

