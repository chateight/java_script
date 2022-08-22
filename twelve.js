// iteration

//
// iterator ; to make an object iterable
//
function numIterator( min, max, step ){       // "next()" repeats from "min" to "max-1"
    let val = min - step;
    return{
        next(){
            if ( val < max ){
                return {
                    done: false,
                    value: val = val + step
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const iteNum = numIterator( 2, 8, 2 );

let nextValue = iteNum.next();

while ( !nextValue.done ){
    console.log(nextValue.value);       // 2, 4, 6, 8
    nextValue = iteNum.next();
}

//
// iterable ; to override iterator using [Symbol.iterator] 
//
Array.prototype[ Symbol.iterator ] = function (){
    let index = 0;
    let set = this;

    return{
        next(){
            if (index <set.length){
                return{
                    done: false,
                    value: set[ index++ ]*2
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}

for (let it of [ 1, 3, 5, 7, 9, 2, 4, 6, 8 ]){
    console.log( it );                              // 2, 6, .....
}

// resume the iterator function to the defalut
Array.prototype[ Symbol.iterator ] = function (){
    let index = 0;
    let set = this;

    return{
        next(){
            if (index <set.length){
                return{
                    done: false,
                    value: set[ index++ ]
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}

//
// Generator ; it simplifies the code compared to iterator
//
function* genIte(max){
    let value = 1;
    while( value < max ){
        yield value++;
    }
}

const num_Ite = genIte(5);

let nextVal = num_Ite.next();

while ( !nextVal.done ){
    console.log(nextVal.value);     // 1, 2, 3, 4
    nextVal = num_Ite.next();
}

//
// making an iterable object using Generator
//
class Ite{
    *[Symbol.iterator](){
        for (let key in this ){
            yield[key, this[key]]
        }
    }
}

class Man extends Ite{          // extended class have an iterability
    constructor(first, family, age, address){
        super();
        this.first = first;
        this.family = family;
        this.age = age;
    }
}

const john = new Man("john", "wayne", 50);

for(const row of john){
    console.log(row[0], row[1]);
}

// exercise 12.2 using conventional method
const html = '<h1>title</h1><h2>sub1_title</h2><h3>sub2_title</h3><header>header</header>';

const pattern = /<(h[1-6])>(.+)<\/\1>/g;    // "\1" means the reference to the "h[1-6]" matching result

const matched = html.matchAll( pattern);

for ( const str of matched){
    console.log(str[2]);
}

// excercise 12.2 using Generator
function* tagText(html){
    const matchedG = html.matchAll(pattern);
    for (const str of matchedG){
        yield(str[2]);
    }
}

for ( const str of tagText(html)){
    console.log(str);
}

// convert an Array to the iterable object
class Ite_base{
    *[Symbol.iterator](){
        for (let key in this ){
            yield[key, this[key]]
        }
    }
}

class Ite_array_to_obj extends Ite_base{
    constructor([...array]){
        let index = 1;
        let map_obj = new Map();
        super();
        for (const ele of [...array]){
            map_obj.set(index, ele)
            index++;
        }
        this.map_obj = map_obj;
    }
}

const obj_array = new Ite_array_to_obj([2, 4, 7, 1, 10]);

for(const row of obj_array){
    console.log(row[0], row[1]);
}

//
// spread operator
//
function multiply_spread(...args){
    let retVal = 1;
    for (const val of args){
        retVal *= val;
    } 
    return retVal;
}

let ret = multiply_spread(2, 4, 8);

console.log(`multiple total :`, ret);

// exercise 12.3
function total_calc(tax, ...prices){
    let price_with_tax = 0;
    for (const price of prices){
        price_with_tax += Math.floor(price + tax*price/100);
    }
    return price_with_tax;
}

let ret_total = total_calc( 8, 108, 210, 398 );

console.log(`price including tax :`, ret_total);

// array expansion
let num = [108, 210, 398];

let marge = [...num, 300, 400, 500];

console.log(`Max value :`, Math.max(...marge));

// exercise page 364
class Shape{
    constructor( options ){
        const defaults = {type: "quadrangle", textColor: "black", borderColor: "none", bgColor: "white"};
        this.options = { ...defaults, ...options };     // override is a key
    }
    
    draw(){
        const {type, textColor, borderColor, bgColor} = this.options;
        console.log( `shape:[${type}], textColor[${textColor}], borderColor[${borderColor}], bgColor[${bgColor}]` );    
    }
}

const triangle = new Shape({type: "triangle"});
triangle.draw();

