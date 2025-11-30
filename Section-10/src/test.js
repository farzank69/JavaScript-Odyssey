function setTimeoutPromise(delay) {
    return new Promise(function (res, rej) { return res(delay); });
}
setTimeoutPromise(1000).then(function () { return console.log("5s have passed"); });
