"use strict";
// Q:31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["Saeed", "Ahmed", "Saudi", "Nimra"];
// check the list of users is not empty.
if (usernames.length > 0) {
    // loop through the array and print each user
    for (let user of usernames) {
        console.log("user:" + user);
    }
}
else {
    console.log("We need to find some users!");
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
let nullNames = [];
if (nullNames.length > 0) {
    // loop through the array and print each user
    for (let user of nullNames) {
        console.log("user:" + user);
    }
}
else {
    console.log("We need to find some users!");
}
