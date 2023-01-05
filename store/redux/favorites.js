import { createSlice } from "@reduxjs/toolkit";
import { exp } from "react-native-reanimated";

const favoitesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoitesSlice.actions.addFavorite;
export const removeFavorite = favoitesSlice.actions.removeFavorite;
export default favoitesSlice.reducer;
