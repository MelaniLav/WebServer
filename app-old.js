
const http = require('http');


console.log("Hola mundo");


http.createServer((req, res) => {
    console.log(req);
    //res.writeHead(201, { 'Content-Type': 'application/json' }) // recurso no encontrado
    res.setHeader('Content-Disposition', 'attachment;filename = lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' })
    res.write('id,nombre\n');
    res.write('1,Fernando\n');
    res.write('2,Mariza\n');
    res.write('3,Gladys\n');
    res.write('Hola Mundo');
    res.end();
})

    .listen(8080);
console.log('Escuchando el puesto: ', 8080);