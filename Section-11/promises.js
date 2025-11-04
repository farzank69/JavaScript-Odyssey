function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success){
                resolve("Data fetched successfully")
            } else{
                reject("Error fetching data")
            }
        }, 3000);
    })
}

// consuming the promise
// let response = fetchData()
// console.log(response);


// Chaining the promise
fetchData()                                       // this is how the chaining works, you can even chain further by adding another then() basedon the requirements.
    .then((data) => {
        console.log(data)
        return data.toLowerCase();
    })
    .then((val) => {
        console.log(val);
    })
    .catch((error) => console.error(error));