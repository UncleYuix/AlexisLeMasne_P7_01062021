const multer = require("multer");

// Constante dictionnaire de type MIME, celà permet de savoir quel fichier sont supportés et utilisés
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  // Nous créons une constante storage , à passer à multerpour indiquer à multer où enregistrer les fichiers entrants
  // La fonction destination indique à multer d'enregistrer les fichiers dans le dossier images (cf le callback)
  destination: (req, file, callback) => {
    callback(null, "images");
  },

  // La fonction filename indique à multer d'utiliser le nom d'origine, de remplacer les espaces par des underscores et d'ajouter un timestamp Date.now() comme nom de fichier.
  // Elle utilise ensuite la constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

// Nous exportons ensuite l'élément multer entièrement configuré, lui passons notre constante storage et
// lui indiquons que nous gérerons uniquement les téléchargements de fichiers image
module.exports = multer({ storage: storage }).any("image");

