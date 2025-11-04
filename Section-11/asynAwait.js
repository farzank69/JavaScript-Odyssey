function fetchUserData (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "farzan", URL: "https://example.com"})
        }, 3000);
    });
}

async function getUserData(){
    try {
        console.log("Fetching User Data....");
        const userData = await fetchUserData();
        console.log("Data fetched successfully");
        console.log("User Dat:", userData);
    } catch (error) {
        console.log("Error fetching data");
    }
}
getUserData();