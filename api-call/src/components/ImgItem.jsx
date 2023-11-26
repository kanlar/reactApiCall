function ImageItem({ image }) {
  return (
    <div className="imgDiv">
      <img
        className="imageListImg"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
