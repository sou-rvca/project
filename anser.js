const isValid = (s) => {
    let result = Boolean(true);
    let num = s.length;
    var a = Array[num];
    let y = s.split('');
    console.log(y);

    for(let j = 0; j < num; j++){
        if (a[j].equals(")") || a[j].equals("}") || a[j].equals("]")){
            let open = "";
            let close = a[j];
            let error = "";
            let error1 = "";

            if (close.equals(")")){
                    open = "(";
                    error = "{";
                    error1 = "[";
            } else if (close.equals("}")) {
                    open = "{";
                    error = "(";
                    error1 = "[";
            }else if (close.equals("]")) {
                    open = "[";
                    error = "(";
                    error1 = "{";
            }

            let matched = Boolean(false);

            for (let k = j - 1; k >= 0; k--) {
                if (a[k].equals("t")) continue; 

                if (a[k].equals(open)) {
                    a[k] = "t";  
                    a[j] = "t";  
                    matched = true;
                    break;
                } else if (a[k].equals(")") || a[k].equals("}") || a[k].equals("]")) {
                    
                    result = false;
                    break;
                }else if (a[k].equals(error) || a[k].equals(error1) ) {
                    
                    result = false;
                    break;
                }
            }
            if (!matched) {
                    result = false;
                    break;
            }
        }
        System.out.println(result);
    }
};

let s = '()';
console.log(isValid(s)); // true
s = '({)}'
console.log(isValid(s)); // false
