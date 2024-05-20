/*
INSTRUCCIONES:

Cree una función que reciba la variable "companies" como parámetro; esta función debe devolver
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

// Función para validar si todos los nombres están en mayúsculas
function validateUpperCase(companies) {
    for (const company of companies) {
        // 1) Verificar si el nombre de la compañía está en mayúsculas
        if (company.name !== company.name.toUpperCase()) {
            return false;
        }

        //  Verificar si todos los nombres y apellidos de los usuarios están en mayúsculas
        for (const user of company.users) {
            if (user.firstName !== user.firstName.toUpperCase() || user.lastName !== user.lastName.toUpperCase()) {
                return false;
            }
        }
    }
    return true;
}

const companies = createAll();
cleanConsole(3, companies);

// Probar la función validateUpperCase
const isValid = validateUpperCase(companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', isValid);

module.exports = { validateUpperCase };
