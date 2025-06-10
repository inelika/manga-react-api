import { useEffect, useContext } from "react";
import axios from "axios";
import { MangaContext } from "./context/MangaContext";

const useFetchManga = (query, page) => {
  const { dispatch } = useContext(MangaContext);

  useEffect(() => {
    axios
      .get("https://api.mangadex.org/manga", {
        params: {
          title: query,
          limit: 12,
          offset: (page - 1) * 12,
          includes: ["author", "cover_art", "tag"],
        },
      })
      .then((res) => {
        dispatch({ type: "SET_MANGA", payload: { data: res.data.data, total: res.data.total } });
      })
      .catch((err) => console.error(err));
  }, [query, page]);
};

export default useFetchManga;