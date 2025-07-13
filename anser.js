const isValid = (s) => {
    let result = Boolean(true);
    let text = s.split('');
    let a = text.slice();

    for(let i = 0; i < s.length; i++){
        if (a[i] === ")" || a[i] === "}" || a[i] === "]"){
            let open = "";
            let close = a[i];
            let mismach1 = "";
            let mismach2 = "";

            if (close === ")"){
                    open = "(";
                    mismach1 = "{";
                    mismach2 = "[";
            }else if (close === "}"){
                    open = "{";
                    mismach1 = "(";
                    mismach2 = "[";
            }else if (close === "]"){
                    open = "[";
                    mismach1 = "(";
                    mismach2 = "{";
            }

            let matched = Boolean(false);

            for (let j = i - 1; j >= 0; j--){
                if (a[j] === ("finish")) continue; 

                if (a[j] === (open)){
                    a[j],a[i] = "finish";
                    matched = true;
                    break;
                } else if (a[j] === ")" || a[j] === "}" || a[j] === "]"){
                    
                    result = false;
                    break;
                }else if (a[j] === mismach1 || a[j] === mismach2){
                    
                    result = false;
                    break;
                }
            }
            if (!matched){
                    result = false;
                    break;
            }
        }
    }
    return result;
};

let s = '()';
console.log(isValid(s)); // true
s = '({)}'
console.log(isValid(s)); // false
