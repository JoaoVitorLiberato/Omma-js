const persons = [
    {
        _id: "6254a5266c92229bd97d0384",
        isActive: true,
        age: 31,
        name: "Katrina Dickson",
        gender: "female",
        email: "katrinadickson@orbean.com",
        phone: "+1 (859) 466-3606",
        address: "461 Harkness Avenue, Century, Arizona, 7101",
        tags: [
            "commodo",
            "officia",
            "excepteur",
            "incididunt",
            "ad",
            "minim",
            "proident",
        ],
        friends: [
            {
                id: 0,
                name: "Potts Jacobs",
            },
            {
                id: 1,
                name: "Terrell Lawrence",
            },
            {
                id: 2,
                name: "Sawyer Cross",
            },
        ],
        favoriteFruit: "strawberry",
    },
    {
        _id: "6254a526a0a33b6b7954879c",
        isActive: false,
        age: 34,
        name: "Marlene Ochoa",
        gender: "female",
        email: "marleneochoa@orbean.com",
        phone: "+1 (977) 592-2168",
        address: "529 Lee Avenue, Yonah, West Virginia, 9545",
        tags: [
            "reprehenderit",
            "deserunt",
            "ut",
            "ex",
            "enim",
            "laboris",
            "nostrud",
        ],
        friends: [
            {
                id: 0,
                name: "Violet Murray",
            },
            {
                id: 1,
                name: "Brady Banks",
            },
            {
                id: 2,
                name: "Johnson Dawson",
            },
        ],
        favoriteFruit: "strawberry",
    },
    {
        _id: "6254a5267c0759888c9556d3",
        isActive: false,
        age: 25,
        name: "Ramos Graham",
        gender: "male",
        email: "ramosgraham@orbean.com",
        phone: "+1 (817) 577-2821",
        address: "700 Willoughby Avenue, Beason, Connecticut, 3216",
        tags: ["irure", "ad", "mollit", "incididunt", "dolor", "consequat", "duis"],
        friends: [
            {
                id: 0,
                name: "Pamela Good",
            },
            {
                id: 1,
                name: "Hillary Zamora",
            },
            {
                id: 2,
                name: "Lindsay Walters",
            },
        ],
        favoriteFruit: "apple",
    },
    {
        _id: "6254a526ce8ef46bc436682d",
        isActive: true,
        age: 36,
        name: "Eva Pacheco",
        gender: "female",
        email: "evapacheco@orbean.com",
        phone: "+1 (975) 453-2678",
        address: "441 Lake Avenue, Levant, Michigan, 3659",
        tags: ["do", "amet", "nostrud", "cupidatat", "do", "velit", "duis"],
        friends: [
            {
                id: 0,
                name: "Cruz Levy",
            },
            {
                id: 1,
                name: "Jordan Suarez",
            },
            {
                id: 2,
                name: "Mays Martinez",
            },
        ],
        favoriteFruit: "apple",
    },
    {
        _id: "6254a526ddf52be3e4aa15ab",
        isActive: false,
        age: 34,
        name: "Gill Castillo",
        gender: "male",
        email: "gillcastillo@orbean.com",
        phone: "+1 (847) 589-3592",
        address: "948 Lamont Court, Ernstville, Washington, 1245",
        tags: ["fugiat", "quis", "est", "est", "esse", "proident", "occaecat"],
        friends: [
            {
                id: 0,
                name: "Christian Guy",
            },
            {
                id: 1,
                name: "Karina Page",
            },
            {
                id: 2,
                name: "Karen Stevens",
            },
        ],
        favoriteFruit: "strawberry",
    },
    {
        _id: "6254a52685d3f9224aaaa554",
        isActive: true,
        age: 34,
        name: "Sarah Hinton",
        gender: "female",
        email: "sarahhinton@orbean.com",
        phone: "+1 (857) 524-3053",
        address: "822 Greenpoint Avenue, Harrison, Maine, 819",
        tags: [
            "amet",
            "reprehenderit",
            "consequat",
            "exercitation",
            "laboris",
            "proident",
            "exercitation",
        ],
        friends: [
            {
                id: 0,
                name: "Nancy Meadows",
            },
            {
                id: 1,
                name: "Karyn Burnett",
            },
            {
                id: 2,
                name: "Robbins Woods",
            },
        ],
        favoriteFruit: "apple",
    },
    {
        _id: "6254a52665680840299afb4d",
        isActive: true,
        age: 34,
        name: "Melissa Bradley",
        gender: "female",
        email: "melissabradley@orbean.com",
        phone: "+1 (801) 482-2853",
        address: "764 Brown Street, Wilmington, Oregon, 8068",
        tags: [
            "officia",
            "eu",
            "consectetur",
            "mollit",
            "cillum",
            "voluptate",
            "consequat",
        ],
        friends: [
            {
                id: 0,
                name: "Lucille Morgan",
            },
            {
                id: 1,
                name: "Medina Padilla",
            },
            {
                id: 2,
                name: "Day Young",
            },
        ],
        favoriteFruit: "apple",
    },
];

// Jeito Basico de pecorrer elementos do array

// for(let i = 0; i < persons.length; i++){
//     const pessoa = persons[i];
//     //console.log(pessoa.name);
//     //ou
//     console.log(`Nome: ${pessoa.name}, idade: ${pessoa.age}`)
// }

const listNames = persons.forEach((pessoa) => {
    console.log(`nome: ${pessoa.name}, idade: ${pessoa.age}`);
});


// Metodo retornando o objeto

// const newPersons = persons.map((pessoa) => {
//     return {
//         Name: pessoa.name,
//         Age: pessoa.age,
//         Gender: pessoa.gender

//     }
// });
// console.log(newPersons);


// Metodo encapsulando os objetos.
const newPersons = persons.map((pessoa) => (
    {
        name: pessoa.name,
        age: pessoa.age,
        gender: pessoa.gender,
    }
)
);

// console.log(newPersons);

// const seachName = persons.filter((people) => {
//     if(people.gender == 'male' ){
//         console.log(people);
//     }
// }
// )
// console.log(seachName);



const peopleQueMoramNoArizona = persons.filter((seach) => {
    return seach.address.toLowerCase().indexOf('arizona') != -1;
})

// console.log(peopleQueMoramNoArizona);
const tagsPeople = persons.filter((people) => {
    if (people.tags.indexOf('do') !== -1) {
        console.log(people)
    }
}
);
console.log(tagsPeople);

const acharPessoasPelaIdade = persons.filter((people) => {
    if (people.age === 34) {
        console.log(`${people.name} - ${people.age}`);
    }

});

console.log(acharPessoasPelaIdade);

const deletePeoples = (id) => {

    const deletePeople = persons.findIndex((people) => {
        return people._id === id;
    });

    if(deletePeople === -1){
        return console.log('Pessoa não encontrada!');
    }

    persons.sprice(deletePeople, 1);

}
console.log(persons.length);


