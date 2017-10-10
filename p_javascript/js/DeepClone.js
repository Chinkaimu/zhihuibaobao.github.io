/**
 * Created by Lenovo on 2016/7/11.
 */
function deepClone(obj){

    var _toString = Object.prototype.toString;

    //null,undefined,non-object,function
    if(!obj && typeof obj != "object"){
        return obj;
    }

    //DOM object
    if(obj.nodeType && "cloneNode" in obj){
        return obj.cloneNode(true);
    }

    //Date
    if(_toString.call(obj) === '[object Date]'){
       return new Date();
    }

    //RegExp
    if(_toString.call(obj) === '[Object RegExp]'){
        var flags = [];
        if(obj.global) flags.push("g");
        if(obj.multiline) flags.push("m");
        if(obj.ignoreCase) flags.push("i");

        //new RegExp(pattern,attributes);
        //g全局匹配；i忽略大小写;m多行匹配
        return new RegExp(obj.source,flags.join(''));;
    }

    var result = Array.isArray(obj)?[]:obj.constructor?new obj.constructor:{};

    for(var key in obj){
        result[key] = arguments.callee.call(obj[key]);
    }
   return result;
}

function A(){
    this.a = a;
}

var a = {
   name:"que",
   birth:new Date(),
   patten:/qiu/gim,
    container:document.body,
    hobbys:['book',new Date(),/aaa/gim,111]
}

var c = new A();
var b = deepClone(c);
console.log(c.a === b.a);
console.log(c,b);
