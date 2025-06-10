import React, { createContext, useReducer } from "react";

const initialState = {
  mangas: [],
  page: 1,
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MANGA":
      return { ...state, mangas: action.payload.data, total: action.payload.total };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export const MangaContext = createContext();

export const MangaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MangaContext.Provider value={{ state, dispatch }}>
      {children}
    </MangaContext.Provider>
  );
};
