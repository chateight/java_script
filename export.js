export let obj_exp = {1: "name_exp"};

export let func_exp = () => console.log("export js");

export default () => console.log("default exprted js"); // "default export" can be defined once in a module

export class Exp {
    constructor(name){
        this.name = name;
    }

    get(){ return this.name};
}

export class Dyna_imp {
    constructor(family){
        this.family = family;
    }
    get(){return this.family};
}

console.log("non_export function");     // if "include" in other script, this script is automatically included

