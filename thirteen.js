// asynchronous operation

//
// using callback
//
function delay(fn, message, ms){
    setTimeout( function(){
        fn(message);
    }, ms);
}

delay(console.log, "hello", 1000);      // "hello" after 1 second

delay(alert, "bye", 3000);              // "bye" after 3 seconds

delay(function(mes){               // nested call(it's not easy to read the code)
    delay(console.log, "one more second passed", 1000);
    console.log(mes);
}, "one second passed", 1000);


//
// using Promise
//
function insFactory(){return new Promise((resolve, reject) => {
    setTimeout( () => {
        const rand = Math.floor(Math.random()*11);
        if (rand < 5){
            reject( rand );         // call the ".catch" clause
        }
        else{
            resolve( rand );        // call the ".then" clause
        }
    }, 1000);
});
}

insFactory().then( value => { console.log(`${value} >= 5` );
}).catch( value => { console.log(`${value} < 5`);
}).finally( () => { console.log("process terminated");
});


// Promise chain
function insFact(index){return new Promise((resolve, reject) => {
    setTimeout( () => {
        index += 2;
        if ( index === 8){
            reject(index);
        }
        else{
            resolve(index);
        }
    }, 1000)
});
}

insFact(-2)
.then ( index => { console.log('insFact', index);return insFact(index);})      // to create new instance, not use generated one
.then ( index => { console.log('insFact', index);return insFact(index);})
.then ( index => { console.log('insFact', index);return insFact(index);})
.then ( index => { console.log('insFact', index);return insFact(index);})
.catch (() => {console.log("index reaches to the max value");})
.finally(() => {console.log("process terminated");});


// Promise status
let promResolve, promReject;

function ins_make(){return new Promise((resolve, reject) => {
    promResolve = resolve;
    promReject = reject;
});}

let prom = ins_make();

console.log(prom);      // Promise {<pending>}

promResolve("arg0");
console.log(prom);      // Promise {<fulfilled>: 'arg0'}


prom = ins_make();      // need to create a new instance

promReject("arg1");
console.log(prom);      // Promise {<rejected>: 'arg1'}

prom.catch(() => {      // exception handling
    console.log("an error was catched")
});

//
// parallel processing(Promise.all) --- settle means fullfilled or rejected
//
//      Promise.all             Promise.race                Promise.any                 Promise.allSetteled
//      -all process end        -settled one of them        -fullfilled one of them     -settled all of them
//      -then/catch             -then/catch                 -then/catch(all of them     -then/no catch
//      (rejected one of them)                              rejected case) 
//
function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log(`${ms} ms process was completed`);
                if (ms > 1000){
                    console.log(`but ${ms} is unexpected value`);
                    reject(ms);
                }
                else{
                    resolve(ms);
                }
        }, ms);
    });
}

const wait300 = wait(300);
const wait600 = wait(600);
const wait1100 = wait(1100);            // if you want not to cause the "reject", change the value of this line not exceed 1000

Promise.all([wait300, wait600, wait1100])
.then(([res300, res600, res1100]) => {          // this clause is not excuted due to the caused "reject"
    console.log('all processes are successfully terminated');
    console.log(res300, res600, res1100);
})
.catch(() => {
    console.log('process was uncompleted');
});


// Promise.any
Promise.any([wait300, wait600, wait1100])
.then( value => {
    console.log('"Promise.any" :', value);  // "Promise.any" : 300
})
.catch( error => {
    console.log(error);             // "AggregateError: All promises were rejected", if all Promise instances were rejected
});


// resolve() & reject() ; to return the fulfilled/rejected Promise instance
let val = "aaa";

Promise.resolve().then( () => {         // executed after the completion of the global context
    console.log(`val is : ${val} `);
})

val = "bbb";

console.log("terminate the global context");


// rejecct()
Promise.reject('cause of the error').catch( error => {
    console.log( error );
})

console.log('terminated the global context2');

//
// async & await
//
async function execute(){
    try{
        let count = await insFact(-2);
        count = await insFact( count );
        count = await insFact( count );
        count = await insFact( count );
        count = await insFact( count );
    }catch ( errorCount){
        console.error(`jump to the error, count value is ${ errorCount }`);

    }finally{
        console.log('all processes were terminated ');
    }
}

execute();


// exercise 13.7
function action(actionName, duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`time for ${actionName}`);
            resolve();
        }, duration);
    });
}

async function makeAction() {
    try{
        let act = await action("breakfast", 200);
        act = await Promise.all([action("lunch", 500), action("chat", 100)]);
        act = await action("dinner", 300);
        act = await action("hobby", 400);
    }catch( error ){
        console.error( error );
    }finally{
        console.log('today was over')
    }
}

makeAction();


// Fetch(json file access)
async function fetchSample(){
    const resp = await fetch("sample.json");    // "sample.json" file is located at the same directory
    const data = await resp.json();
    for ( const { key, value } of data ){
        console.log( 'json file ' + key + ':' + value );
    }
}

fetchSample();


// exercise(using many varieties)
function run( personName ){
    return new Promise(( resolve, reject ) => {
        const time = Math.floor(Math.random()*11);
        setTimeout( () => {
            if ( time % 4 === 0 ) {
                reject ({ personName });
            }else{
                resolve( {personName, time} );
            }
        }, time);
    });
}

const printTime = ( { personName, time } ) => console.log( `${personName}'s time is ${time}` );

run("taro")
.then ( (result) => { printTime(result); return run("hanako");}) 
.then ( (result) => { printTime(result); return run("ichiro");}) 
.then ( (result) => { printTime(result);}) 
.catch( ( { personName } ) => {console.error( `${personName} felt, let's start again` );});


// rewrite with async and await
async function runners(){
    try{
        let result = await run("taro-async");
        printTime(result);
        result = await run("hanako-async");
        printTime(result);
        result = await run("ichiro-async");
        printTime(result);
    }
    catch( { personName } ){
        console.error(`${personName} felt, restart the race`);
    }
}

runners();


// show the top runner
const printFisrt = ( { personName, time } ) => console.log( `first goal is ${personName}, and time is ${time}` );

Promise.any([run("taro"), run("hanako"), run("ichiro")])
.then( (result) => { printFisrt(result);})
.catch(()=> {console.log("all runner felt, start again")});


// show all runners name and time
Promise.all([run("taro"), run("hanako"), run("ichiro")])
.then((results) => {
    for (let  { personName, time } of results){
        console.log( `runner ${personName}'s time is ${time}` );
    }
})
.catch( () => {console.error(" need to restart the race ")});


// exercise using Fetch 
async function fetchJson(){
    const resp1 = await fetch("fruit.json");
    const resp2 = await fetch("fruit_tag.json");
    const data1 = await resp1.json();
    const data2 = await resp2.json();
    let variable_tmp;

    for ( const { key, value } of data1 ){
        variable_tmp = `${value} has properties`;
        for ( const ele in data2[key]){
            variable_tmp += " " + data2[key][ele] + ",";
        }
        console.log(variable_tmp)
    }
}

fetchJson();

