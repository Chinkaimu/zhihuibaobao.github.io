/***************1.字符方法*********************/
var stringValue = "hello world";
stringValue.charAt(0);
stringValue.charCodeAt(1);
stringValue[3]

/****************2.字符串操作方法*********************/
var result = stringValue.concat(" girls");
console.log("result = " + result);
console.log("stringValue = " + stringValue);
//普通截取
stringValue.slice(0,6);
stringValue.substring(0,6);
stringValue.substr(0,6);
//结束位置越界：结束位置为长度
stringValue.slice(0,30);
//初始位置大于结束位置，substring用长度减去相应位置后计算,slice返回空字符串
stringValue.slice(4,3);
stringValue.substring(4,3);
stringValue.substring(4,8);
stringValue.substring(4,2);
stringValue.substring(4,1);
stringValue.substring(4,10);
stringValue.substring(10,0);
//负数处理
stringValue.substring(-3,-4);
stringValue.substring(-5,-4);

/************3.字符串位置方法**********************/
stringValue.indexOf("h",1);
stringValue.lastIndexOf("e",0);

/***************4.trim()方法:ECMAScript5*************/
"  hello  ".trim();
"  hello  ".trimLeft();
"  hello  ".trimRight();

/***********5.字符串大小转换写法**************************/
"hello".toUpperCase();

/*************6.字符串模式匹配方法********************************/


/***************7.localeCompare()方法**************************/
"yellow".localeCompare("black");

/***************8.fromCharCOde()方法****************************/
console.log(String.fromCharCode(104,108,111));