import React, { useState, useEffect } from "react";

export default function UploadImages() {
  const [baseImages, setBaseImages] = useState([]);

  const handleImages = (event) => {
    let files = event.target.files;
    let tempImg = [];

    for (let i = 0; i < files.length; i++) {
      let file = files.item(i);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        tempImg.push(reader.result);
        setBaseImages((prev) => [...prev, reader.result]);
      };

      reader.onerror = (err) => {
        console.log(err);
      };
    }
  };

  useEffect(() => {
    console.log(baseImages);
  }, [baseImages]);
  return (
    <>
      <input
        type="file"
        multiple
        accept="image/*"
        onClick={() => setBaseImages([])}
        onChange={handleImages}
      />
      {baseImages.map((image) => (
        <img key={image} src={image} alt="img" height="200px" />
      ))}
    </>
  );
}
