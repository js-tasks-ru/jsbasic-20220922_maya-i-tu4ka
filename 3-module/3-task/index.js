function camelize(str) {
    let arr = str.split("");
    let newArr = [];

    for(let i = 0; i < arr.length; ++i){
        if (arr[i] === "-"){
            let next = arr[++i];
            let upp = next.toUpperCase();

            newArr.push(upp)
            arr.splice(i, 1);
        }
        newArr.push(arr[i]);
    }
    return newArr.join("");
}