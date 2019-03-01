const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');

module.exports = {
  mdlinks: (inputPath, option) => {
    function reviewInputPath(pathToReview) { // Función que revisa links dentro del archivo MD
      const extractMd = fs.readFileSync(pathToReview).toString(); // Lee el archivo
      const links = markdownLinkExtractor(extractMd); // Extrae los links
      links.forEach((link) => {
        console.log(link);
      });
    }
  },REA
  linkInspector: (inputPath) => {
    // TRANSFORMAR A PROMESA
    // VERIFICAR QUE TEXTO INGRESADO SEA VALIDO
    // VERIFICAR TEXTO VACÍO
    // ===========================================================================
    if (path.isAbsolute(inputPath)) { // Verifico si "ruta" es directorio o archivo
      // Es directorio
      console.log(inputPath);
    } else {
      // Es archivo
      console.log('Es archivo');
      
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
