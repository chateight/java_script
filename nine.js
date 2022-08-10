//
// class basic
//
class Basic_class {
    constructor(username, password, roll){
        this.username = username;
        this.password = password;
        this.roll = roll;
    }

    static static_prop = "static property";

    login(){
        this.check();
        console.log(`login ${this.username}/${this.password}`);
    }

    check(){
        console.log(`to check login information`);
    }

    checkRoll(){
        if (this.roll === "admin"){
            console.log("you are an administrator");
        }
        else{
            console.log("you are a general user");
        }
    }

    access_to_static_property(){
        console.log(Basic_class.static_prop);       //
        console.log(this.constructor.static_prop);  // you can use both types to access static properties
    }
}

const user = new Basic_class("john", "john's pwd", "user");
user.login();
user.checkRoll();
user.access_to_static_property();
//
// exercise nine
//
class StdClass{
    constructor(arg){
        this.arg = arg;
    }

    static printFn = console.log;

    static print(arg){
        StdClass.printFn(arg);                  // call static property "printFn"
    }

    print(){
        this.constructor.print(this.arg);       // call above static method "print()"
    }
}

const std = new StdClass("hello nine_second");
std.print();

class Ext_class extends StdClass{
    constructor(parentArg, name){
        super(parentArg);
        this.child_name = name;
    }

    childMethod(){
        console.log(this.arg, this.child_name);      // parent property access
    }

}

const childObject = new Ext_class("hellow", "Jim");

childObject.childMethod();
//
// ES2022 format
//
class Es2022{                       // current major browzer support ES2022 format at June/2022 
    #_lastName = "uchimura";        // private property "#" marked
    #_firstName = "kazuo";          // constructor is not needed if its function is only set the properties
    #_age;

    get fullName(){
        return this.#_firstName + " " + this.#_lastName
    }

    set age(val){
        this.#_age = Number(val);
    }

    get age(){
        return this.#_age;
    }
}

const person = new Es2022();
person.age = "20";
console.log(person.age);
console.log(person.fullName);
//
// prototype( it previously works as a class function )
//
console.log({} instanceof Object);      // "ture" , {} means "new Object"
//

function Prot(fname){                   // constructor function
    this.name = fname;
}

console.log(typeof Prot.prototype);     // "object", "prototype" property is automaatically generated when the funcion is defined

Prot.prototype.hello = function(){      // to register no name function to the prototype object
    console.log(`hello, ${this.name}`);
}
Prot.prototype.name = "hoge";

const inst = new Prot("umihiko");
inst.hello();               // "hello, haruhiko", "this" refers "Prot" object's property

console.log(inst.__proto__ === Prot.prototype);     // "true", prototype property object reference is copied to the "__proto__" property

inst.__proto__.hello();     // "hello, hoge", not same as "inst.hello()", since "this" refers "prototype" object's property
Prot.prototype.hello();     // same as above

// using "prototype" in the class

class Prot_class{
    sayHello(){ console.log("hello") };
}

const inst_class = new Prot_class;

Prot_class.prototype.sayHello = function(){ console.log("bye") }    // without "prototype", "sayHello()" is not updated

inst_class.sayHello();

// inheritance using "__proto__"

const animal1 = {
    owl: function(){
    console.log("owl");
    }
};

const animal2 = Object.create(animal1);

animal2.squirrel = function(){
    console.log("squirrel");
}

const animal3 = Object.create(animal2);

animal3.zebra = function(){
    console.log("zebra");
}

animal3.zebra();        // "zebra"
animal3.owl();          // "owl"

// inheritance using prototype

function Parent(){}

function Child(){}

Parent.prototype.parentMethod = function() {
    console.log("parent");
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.childMethod = function(){
    console.log("child");
}

const childInstance = new Child;

childInstance.parentMethod();       // "parent"
childInstance.childMethod();        // "child"

// exercise

class User{
    constructor(username){
    this.username = username;
    this.deleted = 0;
    }

    login(){
        if (this.deleted === 0){
            console.log("login was successed");
        }
        else{
            console.log("login was failed");
        }
    }
}

class AdminUser extends User{
    deleteUser(obj_user){
        try{
            if (!(obj_user instanceof User)){
            throw exception;
            }

            this.obj_usr = obj_user;
            obj_user.deleted = 1;
            console.log(`user "${obj_user.username}" was deleted`);

        }catch(exception){
            console.log("argument need to be a User object");
        }
    }
}

const userA = new User("takeo");
userA.login();

const userAmin = new AdminUser();
userAmin.deleteUser(userA);
userA.login();

