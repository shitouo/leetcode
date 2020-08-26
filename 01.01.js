// 判断字符串是否唯一
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。  
// 示例1
// 输入：s = 'leetcode'
// 输出 false
// 示例2
// 输入：s = 'abc'
// 输出：true
// 限制
// 0 <= len(s) <= 100
// 如果你不使用额外的数据结构，会很加分

// 实现过程1
// 使用对象
function checkStrUnique(str = '') {
    let obj = {};
    let strArr = str.split('');
    let length = strArr.length;
    for(let i = 0; i < length; i++) {
        let item = strArr[i];
        if (obj[item]) {
            return false
        } else {
            obj[item] = 1;
        }
    }
    return true;
}

// 使用正则表达式
function checkStrUnique2(str = '') {
    return !/(.).?\1/.test(str)
}