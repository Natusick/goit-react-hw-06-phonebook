import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }, 
    ],
    filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);


export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
