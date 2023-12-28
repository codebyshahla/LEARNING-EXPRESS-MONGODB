const multer =require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/') // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null,file.filename + "-" + Date.now() + file.originalname); // Set the filename
    }
  });
  
  const uploads = multer({ storage: storage });
  module.exports=uploads;
  