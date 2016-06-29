/**
 * Created by Lenovo on 2016/6/25.
 */

/***********1. object_properties *************/
//通过Object创建对象对象
var person1 = new Object();
person1.name = "Nichloas";
person1.age = 31;
person1.job = "Engineer";
person1.sayName = function(){
    console.log(this.name);
}

//对象字面量创建对象
var person2 = {
    name:"Nichloas",
    age:31,
    sayName:function(){
        console.log(this.name);
    }
}

//通过Object.defineObject()定义属性
var person3  = {};
person3.job = "teacher";
   //##错误记录##属性特征都是小写
Object.defineProperty(person3,"name",{configurable:true,writable:true,enumerable:true,value:"chm"});
Object.defineProperties(person3, {
    age: {
        enumerable:true,
        value:25,
        writable: true
    },
    class:{
        value:107,
        writable:false
    },
    sayHi:{
        get:function(){
            return "Hi,I am " + this.name;
        },
        set:function(newValue){
            this.name = newValue;
        }
    }
});
//console.log(person3.sayHi);
//console.log(person3.sayHi = "balabala");

////获得属性特性
//var desc = Object.getOwnPropertyDescriptor(person3,"name");
//console.log("desc.value = " + desc.value);
//console.log("desc.enumerable = " + desc.enumerable);
//
////in操作符：所有可枚举属性(包括自身和原型)
//for(var p in person3) console.log("the property of person3 " + p);
//console.log("toString is the property of person3 ? " + ("toString" in person3));
////hasOwnProperty:所有自有属性
//console.log("person3 hasOwnProperty job ? " + person3.hasOwnProperty("job"));
//console.log("person3 hasOwnProperty name ? " + person3.hasOwnProperty("name"));
//console.log("person3 hasOwnProperty age ? " + person3.hasOwnProperty("age"));
////propertyIsEnumerable:所有可枚举且自有属性
//console.log("job isEnumerableProperty of person3 ? " + person3.propertyIsEnumerable("job"));
//console.log("name isEnumerableProperty of person3 ? " + person3.propertyIsEnumerable("name"));
//console.log("age isEnumerableProperty of person3 ? " + person3.propertyIsEnumerable("age"));
////ECMAScript5 Object.keys():所有可枚举实例属性 ; ,Object.getOwnPropertyNames():所有实例属性，不论是否可枚举
//console.log("Object.keys = " + Object.keys(person3) + "  ;  Object.getOwnPropertyNames = " + Object.getOwnPropertyNames(person3));

/************2 . create object *******************/
//工厂模式，缺点：对象无法识别
function createFunction(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    }
    return o;
}

//构造函数模式，优点：解决对象识别；缺点：每个方法在每个对象实例都有实例。
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}

var person4 = new Person("Nick",35,"teacher");
var person5 = new Person("John",21,"worker");
//console.log(person4.age);
//person4.sayName();
//person5.sayName()

//单独执行函数会将属性添加到window
Person("window",73,"test");
//sayName();
//可以添加作用域
var o = new Object();
Person.call(o,"callChm",8,"callTest");
//o.sayName();

function Person1(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName(){
        console.log(this.name);
}
var person11 = new Person1("chm","24","engineer");
var person12 = new Person1("chm2","24","engineer");
//person11.sayName();
//person12.sayName();

//原型模式
function Person2(){}
Person2.prototype.name = "Joe";
Person2.prototype.age = "12";
Person2.prototype.friends = ["John,Andy,Rose"];
Person2.prototype.sayHi = function(){
    console.log("Here is " + this.name);
}
var person6 = new Person2();
var person7 = new Person2();
person6.name = "Nick";
//console.log("person6.name = " + person6.name + " ; person7.name = " + person7.name);
//person6.sayHi();
//person7.sayHi();
person6.friends.push("Dacy");
//console.log("person6.friends = " + person6.friends + " ;  person7.friends = " + person7.friends);
person6.friends = ["Candy"];
//console.log("person6.friends = " + person6.friends + " ;  person7.friends = " + person7.friends);
person6.friends.push("Van");
//console.log("person6.friends = " + person6.friends + " ;  person7.friends = " + person7.friends);

function Person3(){}
Person3.prototype = {
    constructor:Person3,
    name:"Jim",
    age:6,
    job:"student",
    sayName:function(){
        console.log(this.name);
    }
}
//组合使用构造函数模式和原型模式
function Person4(name,age,job,friends){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = friends;
}
Person4.prototype.sayName = function(){
    console.log(this.name);
}
Person4.prototype.class = "1004";
var person8 = new Person4("Nancy",9,"student",["1","2"]);
var person9 = new Person4("Hurry",10,"student",["1","2","3","5"]);
//console.log("info of person8 : " + person8.friends);
//console.log("info of person8 : " + person9.friends);

//动态原型模式
function Person5(name,age){
    this.name = name;
    this.age = age;
    //##错误记录##sayName前的this
    if(typeof this.sayName != "function"){
        Person5.prototype.sayName = function(){
            console.log("print Person5's name" + this.name);
        }
    }
}
var person10 = new Person5("Elise",90);
//person10.sayName();
//寄生构造函数模式
function Person6(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
       console.log(this.name);
    }
    return o;
}

var person11 = new Person6("fzl",26,"engineer");
//person11.sayName();
//##错误记录##：对于instanceof，typeof，isEnumerableProperty等操作符如果左边有+等操作，一定要加上括号修改优先级。
//console.log("person11's type person11 instanceof Object ? " + (person11 instanceof Object));
//console.log("person11's type person11 instanceof Person6 ? " + (person11 instanceof Person6));

//稳妥构造函数模式
function Person7(name,age,job){
    var o = new Object();
    o.sayName = function(){
        console.log("Person7 sayName : " + name);
    }
    return o;
}
var person12 = new Person7("chen",29,"designer");
//person12.sayName();


/************3 . object inherit*******************/
//原型链继承:缺点：超类型实例属性会成为子类型的原型属性，对引用类型而言，一个对象的操作会影响其他对象；无法在不影响所有对象的情况下向超类型传递参数
function SuperType1(){
    this.property = true;
}
SuperType1.prototype.getSuperValue = function(){
    return this.property;
}

function SubType1(){
    this.subproperty = false;
}

SubType1.prototype = new SuperType1();
//一定要放在重写原型函数之后
SubType1.prototype.getSubValue = function(){
    return this.subproperty;
}

var subType1 = new SubType1();
//console.log("subType1.property = " + subType1.property + " ; subType1.subproperty = " + subType1.subproperty);
//console.log("subType1.property = " + subType1.getSuperValue() + " ; subType1.subproperty = " + subType1.getSubValue());

//组合继承：使超类型的实例属性不会成为子类型的原型属性（实例属性覆盖原型属性），并且能够传递参数。属性通过借用构造函数继承，方法通过原型继承。
function SuperType2(name,age){
   this.name = name;
   this.age = age;
   this.subproperty = true;
}
SuperType2.prototype.getSuperValue = function(){
    return this.subproperty;
}

//此处为借用构造函数
function SubType2(name){
    SuperType2.call(this,name);
    this.subproperty = false;
}
SubType2.prototype = new SuperType2();
SubType2.prototype.constructor = SubType2;
SubType2.prototype.getSubValue = function(){
    return this.subproperty;
}

var subType2 = new SubType2("chm1",10);
//console.log("subType2.name = " +subType2.name);
//console.log("subType2.property = " + subType2.getSuperValue() + " ; subType2.subproperty = " + subType2.getSubValue());
var subType3 = new SubType2("chm2",10);
//console.log("subType3.name = " +subType3.name);
//console.log("subType3.property = " + subType3.getSuperValue() + " ; subType3.subproperty = " + subType3.getSubValue());

//原型式继承:能够完成基于已有对象创建新对象，同时不必因此创建自定义的类型。相当于创建对象副本，还可以加入自定义属性。
function object(o){
    if(o == null) throw TypeError();
    if(Object.create) return Object.create(o);
    var t = typeof o;
    if(o !== "object" && t !== "function") throw TypeError();
    function f(){};
    f.prototype = o ;
    return new f();
}

var person13 = {
    name:"Nicholas",
    _job:"student",
    friends:["Shelby","Court","Van"]
}
var person14 = Object.create(person13,{
    age:{
        value:14
    },
    job:{
        get:function(){
            return this._job;
        },
        set:function(job){
           this._job = job;
        }
    }
});
person14.job = "teacher";
//console.log(person14.job);

//寄生式继承
function createAnother(original){
    var clone = object(original);
    clone.sayHi = function(){
        console.log("hi");
    }
    return clone;
}

//寄生组合式继承
function inheritPrototype(SubType,SuperType){
    var prototype = object(SuperType.prototype);   //创建对象
    prototype.constructor = SubType;     //增强对象
    SuperType.prototype = prototype;     //指定对象
}
function SuperType(){
    this.superproperty = true;
}
function SubType(){
    SuperType.call(this);
    this.subproperty = false;
}
inheritPrototype(SubType,SuperType);
SubType.prototype.sayProperty = function(){
    console.log(this.subproperty);
}

var subType0 = new SubType();
//console.log("subType0.superproperty = " + subType0.superproperty);