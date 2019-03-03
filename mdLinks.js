require('colors');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const markdownLinkExtractor = require('markdown-link-extractor');

module.exports = {
  linkInspector: (inputPath) => {
    function reviewInputPath(pathToReview) { // Función que revisa links dentro del archivo MD
      const extractMd = fs.readFileSync(pathToReview).toString(); // Lee el archivo
      const links = markdownLinkExtractor(extractMd); // Extrae los links
      links.forEach((link) => {
        console.log(link);
        // NODE FETCH y usar Promesas para verificar el estado de los links
        // Revisar Status en documentación de NODE Fetch
      });
    }
    if (path.extname(inputPath) === '.md') {
      reviewInputPath(inputPath);
    } else if (path.isAbsolute(inputPath)) {
      console.log('Es directorio');
      // Llamar recursivamente a la función para que llame de nuevo si encuentra carpetas dentro de carpetas
    } else if (inputPath === '') {
      console.log('No ingresaste nada.'.red);
    } else {
      console.log('Algo anda mal. Ingresa de nuevo.'.red);
    }
  },
};


// LO QUE DEBE RETORNAR LA FUNCIÓN
// ===========================================================================
/* La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array)
  de objetos (Object), donde cada objeto representa un link y contiene las siguientes propiedades:

    href: URL encontrada.
    text: Texto que aparecía dentro del link (<a>).
    file: Ruta del archivo donde se encontró el link.
 */
