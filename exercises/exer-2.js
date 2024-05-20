/* INSTRUCCIONES:

Crear una función que reciba los parámetros la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

// Función para filtrar usuarios por la presencia de un carro
function filterUsersByCar(companies, hasCar) {
    return companies.map(company => {
        // 1) Filtrar usuarios según la presencia de un carro
        const filteredUsers = company.users.filter(user => user.car === hasCar);
        return {
            ...company,
            users: filteredUsers,
            usersLength: filteredUsers.length // 2) Indicar el total de usuarios correspondientes al parámetro "hasCar"
        };
    });
}

const companies = createAll();
cleanConsole(2, companies);

// Aplicar la función de filtrado
const filteredCompanies = filterUsersByCar(companies, true); // Cambia el booleano según necesites

console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', JSON.stringify(filteredCompanies, null, 2));
