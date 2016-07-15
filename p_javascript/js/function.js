/***************1.函数声明和函数表达式*******************/
//函数声明
function funtionName(arg1,arg2){
    //函数体
}
//函数表达式
var functionName = function(arg1,arg2){}

//函数声明提升
sayHi();
function sayHi(){
    console.log("Hi");
}

//函数声明提升的实例
function foo(xxx){
    console.log(xxx);
    var xxx = "xxx";
    function xxx(){}
    console.log(xxx);
}
foo(333);

/*******************2.递归**********************/
//递归
function factorial(num){
    if(num <= 1) return 1;
    else{
        return num*factorial(num-1);
    }
}
//以上函数如果重命名函数可能会出错
var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial);  //出错,实践中没有出错，正确输出

//递归:利用arguments.callee
function factorial1(num){
    if(num <=1 ) return 1;
    else{
        return num * arguments.callee(num-1);
    }
}

//严格模式下不能使用arugments.callee使用命名函数表达式达到相同的结果
var factorial = (
    function f(num){
        if(num <= 1) return 1;
        else{
            return num*f(num-1);
        }
    }
);

/********************3.闭包***********************/
//典型的闭包案例1
function createComparisonFunction(propertyName){

    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2){
            return -1;
        }
        else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
}

var compareNames = createComparisonFunction("name");
var result = compareNames({name:"Nicholas"},{name:"Geoge"});
compareNames = null; //解除对匿名函数的引用，以便释放内存

//典型闭包实例2: 返回的result数据中的result[0],result[2]等匿名函数执行结果相同，都为10
function createFunctions(){
    var result = new Array();
    for(var i = 0 ; i < 10 ; i++){
        result[i] = function(){
            return i;
        }
    }
   return result;
}
console.log(createFunctions()[0]());


//典型闭包实例2：加入闭包，让每个函数运行后返回自己的索引值
function createFunctions1(){
    var result = new Array();

    for(var i = 0 ; i < 10 ; i ++){
        result[i] = (function(num){
            return function(){
                return num;
            }
        })(i);
    }

    return result;
}


/********************4.理解this对象***********************/

var name = "The window";

var object = {
    name : "My Object",

    getName:function(){
        var that = this;
        return function(){
            return that.name;  //如果直接用this则会返回"The window"
        }
    }
};
console.log("object.getName()－－－－　" + object.getName()());

/*****************5.处理内存泄露***************************/
//闭包对HTML元素创建了循环引用导致内存泄露
function assignHandler(){
    var element = document.getElementById("id");

    element.onclick = function(){
        console.log(element.id);
    }
}
//修改
function assignHandler1(){
    var element = document.getElementById("id");
    var id = element.id;

    element.onclick = function(){
        console.log(id);
    }
    element = null;
}

/********************6.模拟块级作用域，私有变量*************************/
(function(){
    //块级作用域
})();

function MyObject(){
    if(this instanceof MyObject) {
        //私有变量和私有函数
        var privateVariable = 10;

        function privateFunction() {
            return false;
        }

        //特权方法
        this.publicMethod = function () {
            privateVariable++;
            return privateFunction();
        }
    }else{
        return new MyObject();
    }
}

var myObject = new MyObject();

//静态私有变量
(function(){
    var name = "";

    Person = function(value){
        name=value;
    };

    Person.prototype.getName = function(){
        return name;
    }
    Person.prototype.setName = function(value){
        name = value;
    }
})();

var person1 = new Person("Nicholas");
console.log("person1.getName()---" + person1.getName());

var person2 = new Person("Michael");
console.log("person1.getName()---" + person1.getName());
console.log("person2.getName()---" + person1.getName());

//增强的模块模式
var application = function(){
    //私有变量和函数
    var components = new Array();

    //初始化
    components.push(new BaseComponent());

    //创建application的一个局部副本
    var app = new BaseComponnet();

    //公共接口
    app.getComponentComponent = function(){
        return components.length;
    }

    app.registerComponent = function(component){
        if(typeof component == 'object'){
            components.push(component);
        }
    };
    return app;
}();

