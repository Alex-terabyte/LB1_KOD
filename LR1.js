let left = ["aS","Sd","Ka","Kag","aK"];
let right = ["Ff","Sf","Dd","GgG","Ag"];
var t32 = 0;
var t31 = 0;
var t1 = 0;


var long = left.length;
var k = 0;
for (let i=0; i < left.length; i++) {
    let l = left[i].toUpperCase()==left[i];
    let j = 0;
    while (j < left[i].length) {
        if (left[i].charAt(j).toUpperCase()==left[i].charAt(j)) {
            j++;
        } else {
            j++;
            k++;
        }      
    }
}
if (k == 0) {
    for (let i=0; i < right.length; i++) {
        const str = right[i];
        const checkStr = (str) => {
        let countOfChange = 0;
            for (let index = 0; index < str.length; index++) {
                if (index === 0) {
                    if (str[index] !== str[index].toUpperCase()) {
                    return false;
                }
            } else {
                if (str[index - 1] === str[index - 1].toUpperCase() && str[index] != str[index].toUpperCase()) {
                    countOfChange++;
                }
            }
        }
        if (countOfChange > 1) return false;
        return true;
        };
        //console.log(checkStr(str));
        if (checkStr(str) == true) {
            t32++;
            //console.log(t32);
        }
    }
    //console.log("t32 = " + t32);
    for (let i=0; i < right.length; i++) {
        const str = right[i];
        const checkStr = (str) => {
        let countOfChange = 0;
        for (let index = 0; index < str.length; index++) {
            if (index === 0) {
                if (str[index] !== str[index].toLowerCase()) {
                return false;
                }
            } else {
                    if ((str[index - 1] === str[index - 1].toLowerCase() && str[index] !== str[index].toLowerCase()) || (str[index - 1] !== str[index - 1].toLowerCase() && str[index] === str[index].toLowerCase())) {
                    countOfChange++;
                }
            }
        }
        if (countOfChange > 1) return false;
        return true;
        };
        //console.log(checkStr(str));
        if (checkStr(str) == true) {
            t31++;
            //console.log(t31);
        }
    }
    //console.log("t31 = " + t31);
    if (t32 == long) {
        console.log("Регулярная грамматика, выровненная влево");
    } else if (t31 == long) {
        console.log("Регулярная грамматика, выровненная вправо");
    } else {
        console.log("Контекстно-свободная грамматика");
    }
} else {
    for (let i=0; i < left.length; i++) {
        if (right[i].length == left[i].length) {
            t1++;
        }
    }
    if (t1 == left.length) {
        console.log("Контекстно-зависимая грамматика");
    } else {
        console.log("Грамматика типа 0");
    }
}
