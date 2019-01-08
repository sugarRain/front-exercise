        
/* 验证码 */
function createCode(){ 
     code = "";    
     var codeLength = 4;   
     var checkCode = document.getElementById("code");    
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
     'S','T','U','V','W','X','Y','Z');  
     for(var i = 0; i < codeLength; i++) { 
        var index = Math.floor(Math.random()*62); 
        code += random[index];
    }   
    checkCode.value = code;
} 

/* 隔行变色 */
var change = document.getElementsByTagName('li');
for(var i=0;i<change.length;i++)
{
        
        if(i%2==0)
        {
            change[i].style.background='orange';
        }
        else
        {
            change[i].style.background='gray';
        }
}

/* 数组去重 */
//方法一
 var arr = [2,21,1,2,1,3,21,5,6,9,9,9,8,5];
 function removeDuplicatedItem(arr) {
     for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
             if(arr[i]==arr[j]){
               arr.splice(j,1);
               j--;
            }
        }
    }
    return arr;
 }
 
 arr2 = removeDuplicatedItem(arr);
 console.log(arr2);

//方法二
var arr3 = [2,21,1,2,1,3,21,5,6,9,9,9,8,5];
function removeDuplicatedItem2(arr){ 
 var res = []; 
 for(var i=0; i<arr.length; i++){ 
  if(res.indexOf(arr[i]) == -1){ 
   res.push(arr[i]); 
  } 
 } 
 return res; 
} 
arr4 = removeDuplicatedItem2(arr3);
console.log(arr4);

//方法三
var arr4 = [2,21,1,2,1,3,21,5,6,9,9,9,8,5];
function removeDuplicatedItem3(arr){ 
 var res = []; 
 for(var i=0; i<arr.length; i++){ 
  if(!res.includes(arr[i])){ 
   res.push(arr[i]); 
  } 
 } 
 return res; 
} 
arr5 = removeDuplicatedItem2(arr4);
console.log(arr5);


var User = {
    count: 1,
    getCount: function(){
        return this.count;
    }
};
console.log(User.getCount);  //返回getCount函数
var func = User.getCount;
console.log(func());   //返回undefined,this指向window对象,没有定义count属性值
console.log(User.getCount()) //返回1


var length = 10;
function fn(){
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn){
        fn();
        arguments[0]();
    }
};

obj.method(fn,1);  //10 this指向window对象  2(有两参数),this指向arguments对象