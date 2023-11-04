import { useContext } from "react";
import { APIContext } from "../context/APIcontext";
const Favorites = () => {
  const { favorites } = useContext(APIContext);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.src.medium} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
