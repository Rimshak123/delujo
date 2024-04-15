exports.uploadImage = async (req, res) => {
  console.log('Request file:', req.file);
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }

  const image = new Image({
    filename: req.file.filename,
    path: req.file.path,
    // Add any other fields you need
  });

  try {
    await image.save();
    console.log('Image uploaded successfully:', image);
    res.send('Image uploaded successfully.');
  } catch (err) {
    console.error('Error uploading image:', err);
    res.status(500).send('Error uploading image.');
  }
};


