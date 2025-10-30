// Narrowing

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 5
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return         
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
// !!!!!!!!!!!!!!!!
//  DON'T DO THIS!
//  We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.
// !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}