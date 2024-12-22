const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudinaryUpload = async (fileUpload) => {
  try {
    const data = await cloudinary.uploader.upload(fileUpload, {
      resource_type: "auto",
    });
    return data;
  } catch (err) {
    return err.message;
  }
};

const cloudinaryDelete = async (imagepulicID) => {
  try {
    const data = await cloudinary.v2.uploader.destroy(imagepulicID);
    return data;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  cloudinaryUpload,
  cloudinaryDelete,
};
