const readLine = require('readline');
const reviewLinks = require('./mdLinks.js');

if (require.main === module) {
  console.log('Hola, ingresa archivo o directorio.');

  const rl = readLine.createInterface({ // Pausa en consola, para que el usuario escriba
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on('line', (line) => { // captura lo que escribió el usuario, hasta enter
    let arrayCapture = [];
    arrayCapture = line.split('--');
    const path = arrayCapture[0];
    const option = String(arrayCapture[1]).trim();
    reviewLinks.linkInspector(path);
    rl.close();
  });
}
