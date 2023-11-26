import "./App.css";
import searchImages from "./components/api.jsx";
import SearchHeader from "./components/SearchHeader";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (e) => {
    const result = await searchImages(e);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholders={images} />
    </div>
  );
}

export default App;
