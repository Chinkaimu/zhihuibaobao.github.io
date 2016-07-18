/**************1.创建数组（2）*********************/
var a = new Array(12,4,5);
console.log(a);

var b = [12,4,5];
console.log(b);


/***************2.检测数组（2）*********************/
console.log ("b instanceof Array : " + ( b instanceof Array ));
console.log ("Array.isArray(b) : " + Array.isArray(b));


/***************3.转换方法（3）*******************/
console.log("b.toString() : " + b.toString() );
console.log("b.toLocaleString() : " );console.log( b.toLocaleString() );
console.log("b.valueof() : ");console.log(b.valueOf() ); //会输出[12,4,5]
//alert(b.valueOf());   //alert会输出字符串，因为alert接收的参数是字符串，所以会在后台调用toString()
console.log("b.join('|') : " + b.join('|'));
console.log("b.join(undefined) : " + b.join(undefined) );

//toLocaleString与toString()区别
var person1 = {
    toString:function(){
        return "Person1";
    },
    toLocaleString:function(){
        return "LocalePerson1";
    }
};

var person2 = {
    toString:function(){
        return "Person2";
    },
    toLocaleString:function(){
        return "LocalePerson2";
    }
};
var persons = [person1,person2];
console.log("persons :" + persons);
console.log("persons.toString() : " + persons.toString());
console.log("persons.toLocaleString() : " + persons.toLocaleString());


/*******************4.栈方法（2）*********************/
var colors = new Array("red","green");
console.log("colors.push('','white') =  " + colors.push("","white"));
console.log("colors.pop() = " + colors.pop());
console.log("colors.pop() = " + colors.pop());

/*******************5.队列方法（）*******************/
console.log("colors.push('white','gray') = " + colors.push('white','gray'));
console.log("colors.shift() = " + colors.shift());
console.log("colors.unshift('dash','orange') = " + colors.unshift('dash','orange'));
console.log("colors = " + colors);

/*******************6.重排序方法******************/
console.log("重排序");
console.log(a.reverse());
console.log(a.sort());
console.log(a.sort(compare));
function compare(value1,value2){
    return value2 - value1; //降序
}

/*******************7.操作方法*******************/
console.log("-------操作方法-------");
//不会影响原数组
var sliceArray = [0,1,2,3,4,5];
console.log(sliceArray.slice(0,1));
console.log(sliceArray.slice(-3,-2));
console.log("sliceArray = " + sliceArray);

//修改原数组
console.log(sliceArray.splice(0,2));
console.log("sliceArray1 = " + sliceArray);
var spliceArray = [0,1,2,3,4,5];
console.log(spliceArray.splice(2,1,8,9,9,10));//注意返回值是原数组中删除的项！！！！！！！！！！！！！！！！
console.log(spliceArray);

/*******************8.位置方法*********************/
console.log("-------位置方法-------");
var locationArray = ["John","Alice","Dacy","Lucy","0","4","0","John","Alice","Dacy","Lucy","0","4","0"];

console.log(locationArray.indexOf("0"));
console.log(locationArray.lastIndexOf("0"));

/*******************9.迭代方法*******************/
console.log("-------迭代方法-------");
var iteratorArray = [0,1,2,,3,4,45,5,6,6,6];
console.log("iteratorArray = " + iteratorArray);
var some = iteratorArray.some(function(item,index,array){
    console.log(index);
    if(index == 0) console.log(array);
    return item>40;
});
console.log("some = " + some);
console.log("iteratorArray = " + iteratorArray);

var every = iteratorArray.every(function(item,index,array){
    console.log(index + " -- " + item);
    return item >= 0 ;
});
console.log("every = " + every);
console.log("iteratorArray = " + iteratorArray);

var foreach = iteratorArray.forEach(
    function(item,index,array){
        console.log(item*index);
        return true;
    }
);
console.log("foreach = " + foreach);
console.log("iteratorArray = " + iteratorArray);

var map = iteratorArray.map(function(item,index,array){
    return item*2;
});
console.log(map);
console.log("iteratorArray = " + iteratorArray);

var filter = iteratorArray.filter(function(item,index,array){
    return item>10;
});
console.log(filter);
console.log("iteratorArray = " + iteratorArray);

/*******************10.归并方法*******************/
console.log("-------归并方法-------");
var reduceArray = [0,,1,2,3];
var reduce = reduceArray.reduce(function(prev,cur,index,array){
    console.log(prev + "----" + cur);
    return prev+cur;
},10);
console.log(reduce);
console.log(reduceArray);
