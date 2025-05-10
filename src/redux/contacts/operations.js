import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import goitAPI from "../../redux/auth/operations"

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await goitAPI.get("/contacts");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const res = await goitAPI.post("/contacts", newContact);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await goitAPI.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
