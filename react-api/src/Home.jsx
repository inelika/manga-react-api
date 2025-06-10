import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import MangaCard from "./components/MangaCard";
import OverlayModal from "./components/OverlayModal";
import Pagination from "./components/Pagination";
import "./Home.css";

const limit = 20;

const Home = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [mangaList, setMangaList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchManga = async () => {
    const offset = (page - 1) * limit;
    const params = {
      limit,
      offset,
      includes: ["cover_art"],
    };

    if (query) params.title = query;
    if (category) params["includedTags[]"] = [category];

    try {
      const res = await axios.get("https://api.mangadex.org/manga", { params });
      setMangaList(res.data.data);
      const total = res.data.total || 100;
      setTotalPages(Math.ceil(total / limit));
    } catch (err) {
      console.error("Ошибка загрузки манги", err);
    }
  };

  useEffect(() => {
    fetchManga();
  }, [query, category, page]);

  const handleRandom = () => {
    if (mangaList.length > 0) {
      const random = mangaList[Math.floor(Math.random() * mangaList.length)];
      setSelected(random);
    }
  };

  return (
    <div className="container">
      <h1>MangaDex</h1>

      <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />
      <CategoryList onSelect={(c) => { setCategory(c); setPage(1); }} />

      <button className="random-button" onClick={handleRandom}>random</button>

      <div className="manga-grid">
        {mangaList.map((manga) => (
          <MangaCard key={manga.id} manga={manga} onClick={() => setSelected(manga)} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />

      {selected && (
        <OverlayModal manga={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Home;
