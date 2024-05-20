/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

// 1. Función que procesa las compañías aplicando las transformaciones requeridas
function processCompanies(companies) {
    return companies.map(company => {
        // 2. Convertir la primera letra del nombre de la compañía a mayúscula
        company.name = capitalizeFirstLetter(company.name);

        // 3. Convertir la primera letra del nombre y apellido de cada usuario a mayúscula
        company.users = company.users.map(user => {
            user.firstName = capitalizeFirstLetter(user.firstName || '');
            user.lastName = capitalizeFirstLetter(user.lastName || '');
            return user;
        });

        // 5. Ordenar los usuarios de cada compañía alfabéticamente por nombre y apellido
        company.users.sort((a, b) => {
            const fullNameA = `${a.firstName} ${a.lastName}`.toLowerCase();
            const fullNameB = `${b.firstName} ${b.lastName}`.toLowerCase();
            return fullNameA.localeCompare(fullNameB);
        });

        return company;
    }).sort((a, b) => b.usersLength - a.usersLength); // 4. Ordenar las compañías por su total de usuarios en orden decreciente
}

// Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const companies = createAll();
cleanConsole(0, companies);

// Procesar las compañías según las reglas especificadas
const processedCompanies = processCompanies(companies);

// Mostrar los resultados en la consola
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', JSON.stringify(processedCompanies, null, 2));
