const isValid = (s) => {
    let result = Boolean(true);
    let num = s.length;
    let y = s.split('');
    let a = y.split();
    console.log(y);

    for(let j = 0; j < num; j++){
        if (a[j] === ")" || a[j] === "}" || a[j] === "]"){
            let open = "";
            let close = a[j];
            let error = "";
            let error1 = "";

            if (close.equals(")")){
                    open = "(";
                    error = "{";
                    error1 = "[";
            } else if (close.equals("}")){
                    open = "{";
                    error = "(";
                    error1 = "[";
            }else if (close.equals("]")){
                    open = "[";
                    error = "(";
                    error1 = "{";
            }

            let matched = Boolean(false);

            for (let k = j - 1; k >= 0; k--){
                if (a[k].equals("t")) continue; 

                if (a[k].equals(open)){
                    a[k] = "t";  
                    a[j] = "t";  
                    matched = true;
                    break;
                } else if (a[k] === ")" || a[k] === "}" || a[k] === "]"){
                    
                    result = false;
                    break;
                }else if (a[k] === error || a[k] === error1){
                    
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
