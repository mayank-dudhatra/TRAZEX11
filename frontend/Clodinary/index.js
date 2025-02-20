// Connecting with Cloudinary
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dbrb9ptmn',
    api_key: '823246442583854',
    api_secret: 'TcGlxInRzlIbekYugDcA0Pcd3MQ',
});

const react = "./Images/BULL-removebg-preview.png";
const video = "./Video/TestVideo.mp4";
const pdf = "./PDF/cia btech time table even 2025.pdf";
const trazexlogo = "../src/Images/TrazexLogo.png"
// function to upload image , and return image url

const uploadImage = async (react) => {
  try {
    const results = await cloudinary.uploader.upload(react);
    console.log("Image Obj: ", results);
    console.log("Image URL: ", results.secure_url);
    return results.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const uploadLogo = async (trazexlogo) => {
    try {
      const results = await cloudinary.uploader.upload(trazexlogo);
      console.log("Image Obj: ", results);
      console.log("Image URL: ", results.secure_url);
      return results.secure_url;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  

const uploadVideo = async (video) => {
  try {
    const results = await cloudinary.uploader.upload(video, {
      resource_type: "video",
    });
    console.log("Video: ", results.secure_url);
    return results.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const uploadpdf = async (pdf) => {
    try {
      const results = await cloudinary.uploader.upload(pdf, {
        resource_type: "raw", // Specify resource type
      });
      console.log("PDF Obj: ", results);
      console.log("PDF URL: ", results.secure_url);
      return results.secure_url;
    } catch (error) {
      console.error(error);
      return null;
    }
};

uploadLogo(trazexlogo);
// uploadpdf(pdf);
// uploadImage(react);
// uploadVideo(video);