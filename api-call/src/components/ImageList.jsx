/* eslint-disable react/prop-types */
import ImageItem from "./ImgItem";
import "./ImgList.css";

// eslint-disable-next-line react/prop-types
function ImageList({ imagesPlaceholders }) {
  return (
    <div className="imageList">
      {imagesPlaceholders.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
