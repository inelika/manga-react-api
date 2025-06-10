import React from "react";
import "./MangaCard.css";

const MangaCard = ({ manga, onClick }) => {
  const title = manga.attributes.title.en || "No Title";
  const cover = manga.relationships.find((r) => r.type === "cover_art");
  const imageUrl = cover
    ? `https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}.256.jpg`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="manga-card" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MangaCard;
