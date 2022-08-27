import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: {
    items: [
      
    ],
    filter: "",
  },
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
