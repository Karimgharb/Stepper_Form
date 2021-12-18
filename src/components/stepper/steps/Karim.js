import React, { useState } from "react";

function Upload() {
  const [baseImage, setBaseImage] = useState([]);

  const uploadImage = async (e) => {
    const files = e.target.files;

    let filesArr = [];
    for (const [key, value] of Object.entries(files)) {
      filesArr.push(value);
    }
    let base64Arr = [];
    base64Arr = filesArr.map((file) => convertBase64(file));
    setBaseImage(base64Arr);
    console.log(base64Arr);
    // console.log(files);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // const uploadImage = (event) => {
  //     let reader = new FileReader();
  //     const files = event.target.files;
  //     let filesArr = [];
  //     for (const [key, value] of Object.entries(files)) {
  //         filesArr.push(value);
  //     }
  //     filesArr.forEach(file => reader.readAsDataURL(file))
  //     reader.onload = function () {
  //         setBaseImage(reader.result);
  //         console.log(reader.result)
  //     };
  //     reader.onerror = function (error) {
  //         console.log("Error encodage: ", error);
  //     };
  // };

  return (
    <div className="upload">
      <div className="upload_image">
        <input
          multiple
          type="file"
          accept="image/,video/"
          onChange={uploadImage}
        />
        {baseImage.map((conv) => (
          <p>{conv}</p>
        ))}
      </div>
    </div>
  );
}

export default Upload;
