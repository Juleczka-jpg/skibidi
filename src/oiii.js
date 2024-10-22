let ticket = {
    from: "Zamość Starówka",
    to: "Lublin Główny",
    price: 15
};

console.log("Z: ", ticket.from);
console.log("Do: ", ticket.to);
console.log("Koszt: ", ticket.price);
console.log(" ");

let person = {};
person.name =  "Julia";
person.surname =  "Nowakowska";

console.log("Imie: ", person.name);
console.log("Nazwisko: ", person.surname);
console.log(" ");

let book1 = {
    title: "'Speaking JavaScript'",
    author: "Axel Rauschmayer",
    pages: 460
}

let book2 = {
    title: "'Programming JavaScript Applications'",
    author: "Eric Elliott",
    pages: 254
};

let book3 = {
    title: "'Understanding ECMAScript 6'",
    author: "Nicholas C. Zakas",
    pages: 352
};

let library = [book1, book2, book3];

let book4 = {
    title: "'Learning JavaScript Design Patterns'",
    author: "Addy Osmani",
    pages: 254
};

console.log("Przed dodaniem: ", library.length);
library.push(book4);
console.log("Po dodaniu: ", library.length);
console.log(" ");

console.log("Kolejność nazw książek: ");
library.forEach(book => console.log(`${book.title}`));
console.log(" ");

let library2 = library.slice(1,3);
console.log("Tablica z 2 ostatnimi skopiowanymi obiektami: ", library2.length);
console.log(" ");

library.shift();
console.log("Tablica bez pierwszej książki: ", library.length);
console.log("Kolejność nazw książek: ");
library.forEach(book => console.log(`${book.title}`));
console.log(" ");

let allpages = book1.pages + book2.pages + book3.pages;
console.log("Suma wszystkich stron: ", allpages);