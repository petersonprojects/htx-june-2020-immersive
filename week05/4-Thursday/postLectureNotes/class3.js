

let arr = [1, 1, 5, 6, 6, 8, 9]

// [1, 5, 6, 8, 9]


let obj = {};
let filteredArr = [];


for (let i = 0; i < arr.length; i++) {

    if (!obj[arr[i]]) {

        //push filtered array
        filteredArr.push(arr[i])

        //create new key obj
        obj[arr[i]] = true;

    }
}

console.log(filteredArr);


isData = false;
