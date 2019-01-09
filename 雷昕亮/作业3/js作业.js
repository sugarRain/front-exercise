1.
function randomWord(){
	arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var str = "";
	for(i = 0 ; i<4 ; i++){
		str += arr[Math.round(Math.random()*arr.length-1)];
	}
	return str;
}
2.
渐变色.html
3.
3.1 
var arr=['a','a','000','a','a','b','b','b','c','c','d'];
var arr1 = new Set(arr);
console.log(arr1);
3.2
var arr2 = [];
for(var i = 0; i < arr.length; i++){
        if(arr2.indexOf(arr[i]) == -1){
            arr2.push(arr[i]);
        }
    }
console.log(arr2);
3.3
arr.sort();
var arr3 = [arr[0]];
for(var i = 1; i < arr.length; i++){
        if( arr[i] !== arr3[arr3.length-1]){
            arr3.push(arr[i]);
        }
    }
console.log(arr3);
4-1.
var User = {
	count:1,
	getCount:function(){
		return this.count;
	}
};
console.log(User.getCount());
var func = User.getCount;
console.log(func());
/**
*第一个打印1，第二个打印undefined
*因为第一个内部方法中的this指对象本身，所以可以访问内部成员变量
*func为一个函数体，没有返回值
*若func = User.getCount();再打印时会返回1
*/

4-2.
var length = 10;
function fn() {
	console.log(this.length);
}
var obj = {
	length: 5,
	method:function(fn){
		fn();
		arguments[0]();
	}
};
obj.method(fn,1);
/**
*打印10和2
*length是全局变量，所以即使在函数内也可以用this访问,this优先寻找函数内部，再找全局
*arguments[0]()打印函数传入参数的个数（>=1，否则报错）
*/