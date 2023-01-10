
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


// let i = 0;
//
// while (i < users.length) {
//     console.log(users[i])
//     i++
// }
//
// let deepCopy = JSON.stringify(users)
// // console.log(deepCopy)
// let copied = JSON.parse(deepCopy)
// console.log(copied)




// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
//
//
// - є масив

// 1. перебрати його циклом while

// let i = 0;
//
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// //
// while (i < arr.length) {
//    if (arr[i] %2 ===0) {
//        console.log(arr[i])
//    }
//    i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < arr.length; j++) {
//    if (arr[j] % 2) {
//        console.log(arr[j])
//    }
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
let arr = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 3 ===0 ) {
//     console.log(arr[i]= 'okten')
// }
//
// }
// console.log(arr)
// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
//
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
