const express = require('express');
const multer = require('multer');

const router = express.Router();

// Configure Multer storage to specify where to save the uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Set the destination folder for storing images
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop()); // Generate a unique filename for each uploaded image
  },
});

// Create an instance of Multer with the storage configuration
const upload = multer({ storage });

// Define the route for handling image uploads
router.post('/', upload.single('upload'), (req, res) => {
  if (req.file) {
    const fileUrl = '/images/' + req.file.filename; // Construct the URL for the uploaded image
    res.json({
        "uploaded": true,
        "url": `${req.protocol}://${req.get("host")}${fileUrl}`
    }); // Return the URL of the uploaded image to the client
  } else {
    res.status(400).json({
        "uploaded": false,
        "error": {
            "message": "could not upload this image"
        }
    });
  }
});



module.exports = router;
