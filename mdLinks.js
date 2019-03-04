require('colors');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const markdownLinkExtractor = require('markdown-link-extractor');

module.exports = {
  linkInspector: (inputPath, option) => {
    function checkStatus(inputLink) {
      const promise = new Promise.resolve (() => {
        fetch(inputLink.link)
          .then((res) => {
            if (res.status === 200) {
              return resolve(true);
            }
            return resolve(false);
          })
          .catch(err => resolve(false));
      });
    promise
    .then(checkStatus)
    .catch
    }
    const reviewInputPath = (pathToReview) => { // Función que revisa links dentro del archivo MD
      const linkArray = [];
      const extractMd = fs.readFileSync(pathToReview).toString(); // Lee el archivo
      const links = markdownLinkExtractor(extractMd); // Extrae los links, los guarda en un objeto
      links.forEach((link) => {
        // checkStatus(link);
        linkArray.push({
          'href: ': link,
          'text: ': 'nada aún',
          'fie:  ': pathToReview,
        });
        // NODE FETCH y usar Promesas para verificar el estado de los links
        // Revisar Status en documentación de NODE Fetch
        console.log(link);
      });
    };
    if (path.extname(inputPath) === '.md') { // Archivo
      reviewInputPath(inputPath);
      console.log('Solo archivo');
    } else if (path.isAbsolute(inputPath)) { // Carpeta
      console.log('Es directorio');
      // Llamar recursivamente a la función para que llame de nuevo si encuentra
      // carpetas dentro de carpetas
    } else if (inputPath === '') {
      console.log('No ingresaste nada.'.red);
    } else {
      console.log('Algo anda mal. Ingresa de nuevo.'.red);
    }
  },
};
