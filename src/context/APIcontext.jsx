import { createContext, useState } from "react";

const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const PHOTO_URL = "/photos.json";

  const getPhotos = () => {
    fetch(PHOTO_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {});
  };

  const addFavorite = (photo) => {
    setFavorites([...favorites, photo]);
  };

  const removeFavorite = (photo) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== photo.id
    );
    setFavorites(newFavorites);
  };

  const isFavorite = (photo) => {
    return favorites.some((favorite) => favorite.id === photo.id);
  };

  return (
    <APIContext.Provider
      value={{
        photos,
        favorites,
        getPhotos,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIContextProvider };
