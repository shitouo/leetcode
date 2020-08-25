// 将字符串中重复的部分用出现的次数替换
// 例子：jffffdddsadesss
// 输出: jf4d3sades3
function searchRepeat(str = '') {
    return str.replace(/(.)\1+/g, function(match, p) {
        return p + match.length;
    })
}
// 解释：(.)代表对原字符串进行分组，执行的结果就是字符串会变为一个字符一组，\1代表对于第一个括号的引用，而且我们正则表达式中也只有一个括号，注意不是对模式的引用，而是对这个模式匹配到的文本的应用，所以这样达到的效果就是匹配重复一次的字符串，如ff ff dd这样子。然后\1+代表重复1次或者多次这个匹配到的文本，所以就可以找到重复多次的字符串了。