//
// basic function definition
//
function multiply(para1, para2){
    return para2*para1;
}

console.log("result :", multiply(27, 31));
//
// return values ( no return sentence is equivalent to no return value.)
//
function f1(){
    const val = 1 + 1;
    console.log(val);
}

function f2(){
    console.log( 8 % 3 );
    return;
}

console.log(f1());      // undefined
console.log(f2());      // undefined
//
// function formula(another definition of the function)
//
const f_m = function(){         // "let" can be used, what's the difference?
    console.log("this is a function formula");
}
f_m();
//
// callback function(everyhting is object including function)
//
const call_back = function(call_b, msg){        // call argument function
    call_b(msg);
}

const call_back_f_hello = function(msg){
    console.log(msg);
}
const call_back_f_bye = function(msg){
    console.log(msg);
}
const call_back_f_seeyou = function(msg){
    window.alert(msg);
}

call_back(call_back_f_hello, "say hello");
call_back(call_back_f_bye, "say goodbye");
setTimeout(call_back_f_seeyou, 2000, "see you again");       // many built in functions use callback
//
// to confirm anonymous function is an object
//
const anonymous = function(){console.log("hello");}
console.log(anonymous.toString());
setTimeout(anonymous, 2500);            // equivalent to give anonymous function
setTimeout(() => {console.log("hello from arrow function")}, 1000);     // replace with arrow function
//
// using multiple callback functions
//
function add(val1, val2){return val1 + val2;}

function sub(val1, val2){return val1 - val2;}

function callAndDisply(func1, func2, val1, val2){
    func2(func1(val1, val2));
}

callAndDisply(add, console.log, 3, 2);
callAndDisply(sub, alert, 12, 4);
//
//

