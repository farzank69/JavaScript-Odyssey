function setTimeoutPromise(delay: number){
    return new Promise((res, rej) => res(delay)) 
}
setTimeoutPromise(1000).then(() => console.log("5s have passed"))