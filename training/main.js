
function User(id, name, age, status, skills) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.status = status;
    this.skills = skills;
}

let user1 = new User(1,'vasya', 15, false);
let user2 = new User(2,'petro', 15, false);
let user3 = new User(3,'max', 15, false);
let user4 = new User(4,'lisa', 15, false);
let user5 = new User(5,'masha', 15, false);
let user6 = new User(6,'kolya', 15, false);
let user7 = new User(7,'viktor', 15, false);
let user8 = new User(8,'sasha', 15, false);
let user9 = new User(9,'piter', 15, false);
let user10 = new User(10,'anton', 15, false, ['mySql', 'mongoDB', 'js', [3423422]]);

let users = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// for (const user of users) {
//     for (const userKey in user) {
//         if (typeof user[userKey] !== "object") {
//
//             console.log(userKey,user[userKey])
//
//         } else if (typeof user[userKey] === "object") {
//                 for (const innerArray of user[userKey]) {
//                   if (typeof innerArray !== "object") {
//                       console.log(innerArray)
//                   } else {
//                       for (const innerArrayElement of innerArray) {
//                           console.log(innerArrayElement)
//                       }
//                   }
//                 }
//         }
//
//     }
// }
//

let i = 0;

while (i < users.length) {
    console.log(users[i])
    i++
}