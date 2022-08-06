//
// if type="module" setting is enabled, this code does not work properly
// since root context is "undefined" with that setting, so "window.name" could not be accessed
//
window.name = "taro";

const which = () => {
    console.log( this.name );       // "this" has a global scope "Window", since the definition 
}                                   // of the "which" define the scope

const hana = {
    name: "hana",
    callName: function(){
        which();
    }
}

hana.callName();    // "taro"
//
// callback case( execute as a function, not an object )
//
window.val1 = 62;
window.val2 = 41;

const obj = {
    val1: 52,
    val2: 80,
    cal(){
        console.log( this.val1 + this .val2 );  // callback argumented function has a scope of "Window"
    }
}

setTimeout( obj.cal, 1800);     // "103"
//
// bind
//
const taro = {
    name: "hanako",
    hello: function(){
        console.log(`bind to obejct taro : ${this.name}`);
    }
}

setTimeout( taro.hello.bind(taro), 2000);
//
//
//
window.greeting = "hello_eight";

function hello(){
    console.log(this.greeting);     // "hello_eight"
}

hello();

const dog = {
    greeting: "bow",
    hello
}

dog.hello();        // "bow"

const transform = dog.hello;

transform();        // "hello_eight"

setTimeout(dog.hello.bind(dog), 1200);      // without bind, reference is "window"