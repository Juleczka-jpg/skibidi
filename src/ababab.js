console.log(" ")
console.log("Zadanie 4 cz. 1")
console.log("---------")
console.log(" ")
let name1 = "Maxwell Wright";
let name2 = "Raja Villarreal";
let name3 = "Helen Richards";
let phone1 = "(0191) 719 6495";
let phone2 = "0866 398 2895";
let phone3 = "0800 1111";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";
let email2 = "porsuere.vulputate@sed.com";
let email3 = "libero@convallis.edu";

console.log(name1, "/", phone1, "/", email1);
console.log(name3, "/", phone3, "/", email3);

console.log(" ")
console.log("Zadanie 4 cz. 2")

let users = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "porsuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    },
    {
        name: "Maisie Haley",
        phone: "0913 531 3030",
        email: "risus.Quisque@urna.ca"
    }
]

console.log(users[0].name, "/", users[0].phone, "/", users[0].email);
console.log(users[3].name, "/", users[3].phone, "/", users[3].email);
console.log(" ");

console.log("Długość tablicy:", users.length);
