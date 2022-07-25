window.alert("message window");
let val = "chrome";
console.log(val);
let a = 789;
let b = 3;
let c = a%b
console.log(a/b, c);
//
// object
//
let obj_name = {
    first : "taro",
    last : "yamada"
};
console.log(obj_name.first);
obj_name.age = "20";        // to add member
console.log(obj_name.age);
obj_name.address = {country : "japan", pref : "tokyo"}; // to add object
obj_name.address2 = {country : "japan", pref : "fukuoka"}; 
console.log(obj_name.address.pref);
const pref = "osaka";
obj_name.address.pref = pref;               // to modify member
console.log(obj_name.address.pref);
console.log(obj_name["address"]["pref"]);   // using variable name
const add_ress = "address";
console.log(obj_name[add_ress]["pref"]);    // to access using a variable
console.log(obj_name[add_ress + "2"]["pref"]);      
//
console.log(obj_name);      // print out all objects
//
// method
//
let show_val = {
    show(value){console.log(value);}
}
show_val.show("hello from the method");
//
// implicit type conversion
//
console.log(1*true);
console.log(false + true);
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));


