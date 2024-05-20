/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro:

1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

// Función para agrupar usuarios de todas las compañías
function groupUsers(companies) {
    let allUsers = [];
    for (const company of companies) {
        // 1) Agrupar todos los "users" de todas las "companies" en una sola tabla
        const usersWithCompany = company.users.map(user => ({
            ...user,
            company: company.name // 2) Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company"
        }));
        allUsers = [...allUsers, ...usersWithCompany];
    }
    allUsers.sort((a, b) => b.age - a.age); // 3) Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor)
    return allUsers;
}

const companies = createAll();
cleanConsole(4, companies);

// Aplicar la función groupUsers
const groupedUsers = groupUsers(companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', groupedUsers);

