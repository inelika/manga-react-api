import React from "react";
import "./OverlayModal.css";

const OverlayModal = ({ manga, onClose }) => {
  const title = manga.attributes.title.en || "No Title";
  const description = manga.attributes.description?.en?.slice(0, 300) || "Описание недоступно.";
  const cover = manga.relationships.find((r) => r.type === "cover_art");
  const imageUrl = cover
    ? `https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}.512.jpg`
    : "https://via.placeholder.com/300x400?text=No+Image";

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={`https://mangadex.org/title/${manga.id}`} target="_blank" rel="noreferrer">
            <button>📖 Читать</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverlayModal;