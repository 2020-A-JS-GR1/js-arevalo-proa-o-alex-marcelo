const inquirer = require('inquirer');

async function main() {
    try {

        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa tu nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad'
            }
        ]);

        console.log('Respuestas', respuesta);
    } catch (e) {
        console.log(e);
    }
}

main();