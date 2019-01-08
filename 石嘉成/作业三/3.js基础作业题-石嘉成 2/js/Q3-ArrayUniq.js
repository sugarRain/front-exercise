 var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];

var uniq = function(){
    var uniqResult = document.getElementById("uniqResult");
    var liTag = document.createElement('li');
    liTag.innerText = '方法1的结果：'+uniq1(arr);
    var liTag2 = document.createElement('li');
    liTag2.innerText = '方法2的结果：'+uniq2(arr);
    var liTag3 = document.createElement('li');
    liTag3.innerText = '方法3的结果：'+uniq3(arr);
    var liTag4 = document.createElement('li');
    liTag4.innerText = '方法4的结果：'+uniq4(arr);
    var liTag5 = document.createElement('li');
    liTag5.innerText = '方法5的结果：'+uniq5(arr);
    uniqResult.appendChild(liTag)
    uniqResult.appendChild(liTag2)
    uniqResult.appendChild(liTag3)
    uniqResult.appendChild(liTag4)
    uniqResult.appendChild(liTag5)
};

/**
 * 方法一：创建新数组，indexOf()判断新数组是否已经存在元素
 * 时间复杂度O(n),空间复杂度O(n)
 */
function uniq1(){
    var res = [];
    for(var i = 0; i < arr.length; i++){
        if (res.indexOf(arr[i])==-1){
            res.push(arr[i]);
        }
    }
    return res;
}

/**
 * 方法二：借助indexOf()方法判断此元素在原数组中首次出现的位置下标与循环的下标是否相等
 * 时间复杂度O(n),空间复杂度O(1)，算是对方法一的改进
 */
function uniq2() {
    //借助indexOf()方法判断此元素在该数组中首次出现的位置下标与循环的下标是否相等
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            arr.splice(i,1);//删除数组元素后数组长度减1后面的元素前移
            i--;//数组下标回退
        }
    }
    return arr;
}

/**
 * 方法三：两次遍历，此方法不好
 * 时间复杂度O(n^2)
 */
function uniq3() {
    var arr2 = [];
    arr2.push(arr[0]);
    for(var i=1;i<arr.length;i++){
        for(var j=0;j<arr2.length;j++){
            if(arr[i] == arr2[j]){
                break;
            }
        }
        if(j == arr2.length){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

/**
 * 方法四：利用数组中的filter方法
 */
function uniq4() {
    var result = arr.filter(function(element,index,self){
        return self.indexOf(element) === index;
    });
    return result;
}


/**
 * 方法五：利用set函数的特性
 */
function uniq5() {
    var result =new Set(arr)
    return Array.from(result)
}
