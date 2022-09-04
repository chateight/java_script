// module

//
// similar to the name space, bot behave more dynamically 
//
import { obj_exp } from "./export.js";
console.log(obj_exp);

import default_exp from "./export.js";      // import for the default exprted member
default_exp();

import {Exp as Exp_imp} from "./export.js"; // alias for the imported member
let ins = new Exp_imp("experted");
console.log(ins.get());
    
import("./export.js").then(obj => {         // dynamically import the class wrapped with "Promise" object    
    let obj_dyn = new obj.Dyna_imp("john");
    console.log(obj_dyn.get());
});

import "./export.js";       // top level code is excuted first with this inclusion

