const accountId = 14411
let accountEmail = "farzan@gmail.com"
var accountPassword = "44111"
accountCity = "Darbhanga"
let accountState;

// accountId = 2112
accountEmail = "khan@gmail.com"
accountCity = "Delhi"
accountPassword = "11223"


console.log(accountId)

/*
Prefer not to use var because
of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])