const isValid = (s) => {
    let result = Boolean(true);
    let num = s.length;
    var a = Array[num];
    let y = s.split('');
    console.log(y);
};
let s = '()';
console.log(isValid(s)); // true
s = '({)}'
console.log(isValid(s)); // false
