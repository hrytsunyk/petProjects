
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
// let arr = [2,17,13,6,22,31,45,66,100,-18]
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

// let arr = ['df','fsfs','dgdfe', false, true, false, false]
//
// for (const arrElement of arr) {
//     if (typeof arrElement === 'boolean') {
//         console.log(arrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['df','fsfs','dgdfe', false, true, false, false, 12,34,2,43,5]
//
// for (const arrElement of arr) {
//     if (typeof arrElement === 'number') {
//         console.log(arrElement)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let pushedNum = arr.push(arr[i])
//     console.log(pushedNum)
//     document.write(pushedNum, '-')
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let arr = [];
// for (let i = 0; i < 200; i+=2) {
//     let pushedNum = arr.push(arr[i])
//     console.log(pushedNum)
//     document.write(pushedNum, '-')
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// let arr = [];
// for (let i = 0; i < 200; i+=2) {
//
//     let pushedNum = arr.push(arr[i])
//
//     if (pushedNum % 2 === 0) {
//         console.log(pushedNum)
//         document.write(pushedNum, '-')
//     }
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// let arr = [];
// for (let i = 0; i < 200; i+=2) {
//
//     let pushedNum = arr.push(arr[i])
//
//     if (pushedNum % 2) {
//         console.log(pushedNum)
//         document.write(pushedNum, '-')
//     }
//
// }


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

function Book (id, name, pagesNumber, authors, genres, language, year) {
    this.id = id;
    this.name = name;
    this.pagesNumber = pagesNumber;
    this.authors = authors;
    this.genres = genres;
    this.language = language;
    this.year = year;
}

let books = [
    new Book(1,'Harry Potter.Philosopher`s Stone',954, ['J. K. Rowling'], ['Fantasy'], ['english'], 1997 ),
    new Book(2,'Harry Potter.Chamber of Secrets',800, ['J. K. Rowling'], ['Fantasy'], ['english', 'ukrainian'], 1998 ),
    new Book(3,'Harry Potter.Order of the Phoenix',1023, ['J. K. Rowling'], ['Fantasy'], ['english', 'ukrainian', 'italian'], 2003 ),
    new Book(4,'Under the Dom',1099, ['S. King'], ['Fantasy', 'Novel', 'Science fiction', 'Political'], ['english', 'ukrainian', 'italian', 'german'], 2009 ),
    new Book(5,'Angels and Demons',541, ['D. Brown'], ['Novel', 'Mystery-thriller'], ['english', 'ukrainian', 'italian', 'german'], 2000 ),
    new Book(6,'Inferno',600, ['D. Brown'], ['Novel', 'Mystery-thriller'], ['english', 'ukrainian' ], 2000 ),
    new Book(7,'Re Work',172, ['J. Fried', 'D. Hansson'], ['business'], ['english', 'ukrainian'], 2010 ),
    new Book(8,'Kobzar',543, ['T. Shevchenko'], ['Novel'], ['ukrainian'], 2010 ),
    new Book(9,'The Minds of Billy Milligan',345, ['D. Keyes'], ['Noel'], ['english', 'ukrainian'], 2001 ),
    new Book(10,'Flowers to Eldgernon',298, ['D. Keyes'], ['Noel'], ['english', 'ukrainian'], 2001 ),
]
//
// let sort = books.sort((a,b) => b.pagesNumber-a.pagesNumber).splice(0, 1-length);
// console.log(sort)

// let find = books.sort((a, b) => b.genres.length - a.genres.length).splice(0,1-length)
// console.log(find)

//  let b = books.sort((a,b) => b.name.length - a.name.length).splice(0,1-length);
// console.log(b)

books.find(value => console.log(value.authors.length ===2 ? value.name : ''))

