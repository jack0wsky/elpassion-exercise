import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchPhrase: "",
  },
  reducers: {
    updateSearch: (state, action) => {
      state.searchPhrase = action.payload;
    },
  },
});

export const { updateSearch } = searchSlice.actions;

export const useSearch = () => {
  const searchSelect = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  return {
    ...searchSelect,
    updateSearch: (searchPhrase: string) =>
      dispatch(updateSearch(searchPhrase)),
  };
};

export default searchSlice.reducer;
