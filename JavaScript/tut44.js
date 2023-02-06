console.log('Error handling & Try Catch in JavaScript');

// pretend this is coming from server as response
let a = "harry bhai";
a = undefined;
if (a != undefined) {
    throw new Error("This is not undefined");
}
else {
    console.log("This is defined");
}


try {
    // jgjhgjgjgk
    console.log("We are inside try block");

    functionHarry();

} catch (error) {
    console.log("Are you okey");
    // console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Finally we will run this");
}



// find different type of error
// null.console