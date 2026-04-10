const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'avatars');
fs.mkdirSync(uploadDir, { recursive: true });

// Set Storage Engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    cb(null, `avatar-${req.user.id}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // 2MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
});

module.exports = upload;
