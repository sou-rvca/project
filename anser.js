const isValid = (s) => {
    let result = true;
    let chars = s.split('');
    let copy = chars.slice();

    for(let i = 0; i < s.length; i++){
        if (copy[i] === ")" || copy[i] === "}" || copy[i] === "]"){
            let open = "";
            let close = copy[i];
            let mismatch1 = "";
            let mismatch2 = "";

            if (close === ")"){
                    open = "(";
                    mismatch1 = "{";
                    mismatch2 = "[";
            }else if (close === "}"){
                    open = "{";
                    mismatch1 = "(";
                    mismatch2 = "[";
            }else if (close === "]"){
                    open = "[";
                    mismatch1 = "(";
                    mismatch2 = "{";
            }

            let matched = false;

            for (let j = i - 1; j >= 0; j--){
                if (copy[j] === ("finish")) continue; 

                if (copy[j] === open){
                    copy[j] = "finish";
                    copy[i] = "finish";
                    matched = true;
                    break;
                } else if (copy[j] === ")" || copy[j] === "}" || copy[j] === "]"){
                    
                    result = false;
                    break;
                }else if (copy[j] === mismatch1 || copy[j] === mismatch2){
                    
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
