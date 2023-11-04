import { useContext, useEffect } from "react";
import { APIContext } from "../context/APIcontext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, getPhotos, addFavorite, removeFavorite, isFavorite } =
    useContext(APIContext);

  useEffect(() => {
    getPhotos();
  }, []);
  console.log(photos);
  if (!Array.isArray(photos)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery grid-columns-4 p-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-item"
          style={{ position: "relative" }}
        >
          <img src={photo.src.medium} alt={photo.alt} />
          <IconHeart
            isFavorite={isFavorite(photo)}
            onAddFavorite={() => addFavorite(photo)}
            onRemoveFavorite={() => removeFavorite(photo)}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
